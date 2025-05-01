import {Fragment, useState, useEffect} from 'react';
import styles from '../../styles/SalePageStyle/Header.module.scss';
import SaleMenu from './SaleMenu';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../store/main-slice';
import ProductsList from './ProductList';
import SearchingSneakers from './SearchingSneakers';

const Header = function() {
    const dispatchAction = useDispatch();
    const isInputActive = useSelector(state => state.main.isInputActive);
    const favoriteList = useSelector(state => state.product.favoriteList);
    const cardList = useSelector(state => state.product.cardList);


    const [isActiveHeart, setIsActiveHeart] = useState(false);
    const [isActiveCart, setIsActiveCart] = useState(false);
    const [user, setUser] = useState(null);
    const [logout, setLogout] = useState(false);
    const [searchSneakers, setSearchSneakers] = useState([]);
    const [isSearchFocus, setIsSearchFocus] = useState(false);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                const response = await fetch('http://localhost:5000/sneakers');
                const data = await response.json();
                setSearchSneakers(data);
            } catch (error) {
                console.error('loading error:', error);
            }
        }
        fetchSneakers()
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }
    

    const hamburgerToggle = () => {
        dispatchAction(mainActions.saleHamburgerClick())
    }

    const inputHandler = () => {
        dispatchAction(mainActions.inputActive())
    }

    const cartToggle = () => {
        setIsActiveCart(pervIsActiveCart => !pervIsActiveCart)
        setIsActiveHeart(false)
    }

    const heartToggle = () => {
        setIsActiveHeart(pervIsActiveHeart => !pervIsActiveHeart)
        setIsActiveCart(false)
    }

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    

    let favoriteListCount = favoriteList.length;
    let cardListCount = cardList.length;

    const sneakersFilter = searchSneakers.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const logoutStyle = logout ? `${styles['user_under-active']}` : `${styles['user_under']}`;
    const searchFocusStyle = {display: isSearchFocus ? 'block' : 'none'}
    const favoriteListCountStyle = {display: favoriteListCount === 0 ? 'none' : 'flex'}
    const cardListCountStyle = {display: cardListCount === 0 ? 'none' : 'flex'}

    return (
        <Fragment>
            <SaleMenu />
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles['header_block']}>
                        {!isInputActive && (
                        <div className={styles.hamburger} onClick={hamburgerToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>)}
                        {!isInputActive && <img className={styles.logo} src='images/Logo.png' alt=""/>}
                        {isInputActive && <input className={styles['input_mobile']} type="text" placeholder='Search for a model' />}
                        <div className={styles['search-bar']} >
                            <input type="text" placeholder='Search for a model'  
                                onClick={(e) => setIsSearchFocus(!isSearchFocus)}
                                value={searchValue}
                                onChange={handleSearchChange}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className={styles.search} viewBox="0 0 16 16" id="Search--Streamline-Bootstrap" height="16" width="16"><desc>Search Streamline Icon: https://streamlinehq.com</desc><path d="M11.742 10.344a6.5 6.5 0 1 0 -1.397 1.398h-0.001q0.044 0.06 0.098 0.115l3.85 3.85a1 1 0 0 0 1.415 -1.414l-3.85 -3.85a1 1 0 0 0 -0.115 -0.1zM12 6.5a5.5 5.5 0 1 1 -11 0 5.5 5.5 0 0 1 11 0" strokeWidth="1"></path></svg>
                            {isSearchFocus && (
                            <div className={styles.search_sneakers} style={searchFocusStyle}>
                                <ul>
                                    {sneakersFilter.map((obj) => (
                                        <SearchingSneakers 
                                            key={obj.id}
                                            imgURL={obj.imgURL}
                                            title={obj.title}
                                            price={obj.price}
                                        />
                                    ))}
                                </ul>
                            </div>
                            )}
                        </div>
                        <div className={styles.favorite}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className={styles.cart} onClick={cartToggle} viewBox="0 0 16 16" id="Cart2--Streamline-Bootstrap" height="20" width="20"><desc>Cart2 Streamline Icon: https://streamlinehq.com</desc><path d="M0.16 1.2053C0.16 0.9166 0.394 0.6826 0.6827 0.6826H2.2507C2.4906 0.6827 2.6996 0.846 2.7577 1.0788L3.181 2.7733H15.3175C15.6573 2.7734 15.9067 3.0927 15.8245 3.4224L14.2565 9.6945C14.1984 9.9273 13.9893 10.0906 13.7495 10.0907H4.3414C4.1015 10.0906 3.8924 9.9273 3.8344 9.6945L1.843 1.7279H0.6827C0.394 1.728 0.16 1.4939 0.16 1.2053M3.4424 3.8186L4.7491 9.0453H13.3418L14.6485 3.8186ZM5.3867 12.1814C4.582 12.1814 4.0791 13.0525 4.4814 13.7494C4.6682 14.0728 5.0132 14.2721 5.3867 14.2721C6.1914 14.272 6.6944 13.4009 6.292 12.704C6.1052 12.3806 5.7602 12.1814 5.3867 12.1814M3.296 13.2267C3.2925 11.6173 5.0325 10.6076 6.4281 11.4093C7.0786 11.7829 7.479 12.4765 7.4774 13.2267C7.4739 14.8361 5.7294 15.8382 4.3374 15.0304C3.6942 14.6572 3.2976 13.9704 3.296 13.2267M12.7041 12.1814C11.8994 12.1814 11.3965 13.0525 11.7988 13.7494C11.9855 14.0728 12.3306 14.2721 12.7041 14.2721C13.5088 14.272 14.0118 13.4009 13.6094 12.704C13.4226 12.3806 13.0775 12.1814 12.7041 12.1814M10.6134 13.2267C10.6099 11.6173 12.3499 10.6076 13.7455 11.4093C14.396 11.7829 14.7964 12.4765 14.7948 13.2267C14.7913 14.8361 13.0468 15.8382 11.6548 15.0304C11.0116 14.6572 10.615 13.9704 10.6134 13.2267" strokeWidth="1"></path></svg>
                            <span className={styles.dot1} style={cardListCountStyle} >{cardListCount}</span>
                            {isActiveCart && 
                            <div className={`${styles.favorite_list} ${styles.favorite_list_cart}`}>
                                <p className={styles.product_title}>Products in the basket</p>  
                                <ul>
                                    {cardList.map((obj, index) => (
                                        <ProductsList 
                                            key={`${obj.id} ${index}`}
                                            imgURL={obj.imgURL}
                                            title={obj.title}
                                            price={obj.price}
                                        />
                                    ))}
                                </ul>
                            </div>}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" onClick={heartToggle} strokeLinecap="round" strokeLinejoin="round" className={styles.heart} id="Heart--Streamline-Feather" height="20" width="20"><desc>Heart Streamline Icon: https://streamlinehq.com</desc><path d="M13.025 2.88125a3.4375 3.4375 0 0 0 -4.8625 0L7.5 3.54375l-0.6625000000000001 -0.6625000000000001a3.4375 3.4375 0 0 0 -4.8625 4.8625l0.6625000000000001 0.6625000000000001L7.5 13.26875l4.8625 -4.8625 0.6625000000000001 -0.6625000000000001a3.4375 3.4375 0 0 0 0 -4.8625z" strokeWidth="1"></path></svg>
                            <span className={styles.dot2} style={favoriteListCountStyle} >{favoriteListCount}</span>
                            {isActiveHeart && 
                            <div className={`${styles.favorite_list} ${styles.favorite_list_heart}`}>
                                <p className={styles.product_title}>Your favorites</p>
                                <ul>
                                    {favoriteList.map((obj, index) => (
                                        <ProductsList 
                                            key={`${obj.id} ${index}`}
                                            imgURL={obj.imgURL}
                                            title={obj.title}
                                            price={obj.price}
                                        />
                                    ))}
                                </ul>
                            </div>}
                            
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" onClick={inputHandler} className={styles.search_mobile} viewBox="0 0 16 16" id="Search--Streamline-Bootstrap" height="20" width="20"><desc>Search Streamline Icon: https://streamlinehq.com</desc><path d="M11.742 10.344a6.5 6.5 0 1 0 -1.397 1.398h-0.001q0.044 0.06 0.098 0.115l3.85 3.85a1 1 0 0 0 1.415 -1.414l-3.85 -3.85a1 1 0 0 0 -0.115 -0.1zM12 6.5a5.5 5.5 0 1 1 -11 0 5.5 5.5 0 0 1 11 0" strokeWidth="1"></path></svg>
                        {user ? (
                            <div className={styles.user} onClick={(e) => setLogout(!logout)}>
                                <p className={styles['user_name']}>{user.username}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="User--Streamline-Feather" height="25" width="25"><desc>User Streamline Icon: https://streamlinehq.com</desc><path d="M12.5 13.125v-1.25a2.5 2.5 0 0 0 -2.5 -2.5H5a2.5 2.5 0 0 0 -2.5 2.5v1.25" strokeWidth="1.5"></path><path d="M5 4.375a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" strokeWidth="1.5"></path></svg>
                                <div className={logoutStyle} onClick={logoutHandler} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Logout-Fill--Streamline-Sharp-Fill-Material" height="24" width="24"><desc>Logout Fill Streamline Icon: https://streamlinehq.com</desc><path fill="#e40202" d="M3 21V3h8.975v1.5H4.5v15h7.475v1.5H3Zm13.65 -4.625 -1.075 -1.075 2.55 -2.55H9v-1.5h9.075l-2.55 -2.55 1.075 -1.075 4.4 4.4 -4.35 4.35Z" stroke-width="0.5"></path></svg>
                                    <p>Logout</p>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.auth}>
                                <Link to="/auth">
                                    <button className={styles.login}>Login</button>
                                </Link>
                                <Link to="/auth">
                                    <button className={styles.sign}>Sign Up</button>
                                </Link>
                            </div>
                        )}
                        
                    </div>
                </div>
            </header>
            <nav>
                <div className={styles.container}>
                    <ul>
                        <li><a href="/sale">Man</a></li>
                        <li><a href="/sale">Woman</a></li>
                        <li><a href="/sale">Kids</a></li>
                        <li><a href="/sale">Products series</a></li>
                        <li><a href="/sale">Style</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;