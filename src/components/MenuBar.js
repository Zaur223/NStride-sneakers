import { useSelector } from 'react-redux';
import styles from '../styles/MenuBar.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';


function MenuBar() {
    const isHamburgerActive = useSelector(state => state.main.isHamburgerActive)

    const [user, setUser] = useState(null);
    const [logout, setLogout] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    const barStyle = !isHamburgerActive ? `` : `${styles.active}`
    const logoutStyle = logout ? `${styles['user_under-active']}` : `${styles['user_under']}`;
    

    return (
        <div className={`${styles.bar} ${barStyle}`}>
            <div className={styles.menu}>
                <ul className={styles['menu_li']}>
                    <li><Link to='/sale'>Our Store</Link></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>

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
                    <Link to="/auth" className={styles.btn_link}>
                        <button className={styles['menu_login']}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="User--Streamline-Feather" height="25" width="25"><desc>User Streamline Icon: https://streamlinehq.com</desc><path d="M12.5 13.125v-1.25a2.5 2.5 0 0 0 -2.5 -2.5H5a2.5 2.5 0 0 0 -2.5 2.5v1.25" strokeWidth="1"></path><path d="M5 4.375a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" strokeWidth="1"></path></svg>
                            <span>sing up</span>
                        </button>
                    </Link>
                )}
                
            </div>
        </div>
    )
}

export default MenuBar;