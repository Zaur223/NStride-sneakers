import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product.slice';
import styles from '../../styles/SalePageStyle/Card.module.scss';

const Card = (props) => {
    const dispatchAction = useDispatch();
    const history = useHistory();

    const addToFavorite = (e) => {
        e.stopPropagation()
        dispatchAction(productActions.favorite(props.id))
    }

    const addToCard = (e) => {
        e.stopPropagation()
        dispatchAction(productActions.card(props.id))
    }

    const goToProductPage = () => {
        history.push({
            pathname: '/sneakers',
            state: props,
        })
        window.scrollTo(0, 0);
    }


    return (
        <div className={styles.card} onClick={goToProductPage} >
            <div className={styles.favorite}>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={addToFavorite} viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" className={styles.heart} id="Heart--Streamline-Feather" height="20" width="20"><desc>Heart Streamline Icon: https://streamlinehq.com</desc><path d="M13.025 2.88125a3.4375 3.4375 0 0 0 -4.8625 0L7.5 3.54375l-0.6625000000000001 -0.6625000000000001a3.4375 3.4375 0 0 0 -4.8625 4.8625l0.6625000000000001 0.6625000000000001L7.5 13.26875l4.8625 -4.8625 0.6625000000000001 -0.6625000000000001a3.4375 3.4375 0 0 0 0 -4.8625z" strokeWidth="1"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={addToCard} fill="#000000" className={styles.cart} viewBox="0 0 16 16" id="Cart2--Streamline-Bootstrap" height="20" width="20"><desc>Cart2 Streamline Icon: https://streamlinehq.com</desc><path d="M0.16 1.2053C0.16 0.9166 0.394 0.6826 0.6827 0.6826H2.2507C2.4906 0.6827 2.6996 0.846 2.7577 1.0788L3.181 2.7733H15.3175C15.6573 2.7734 15.9067 3.0927 15.8245 3.4224L14.2565 9.6945C14.1984 9.9273 13.9893 10.0906 13.7495 10.0907H4.3414C4.1015 10.0906 3.8924 9.9273 3.8344 9.6945L1.843 1.7279H0.6827C0.394 1.728 0.16 1.4939 0.16 1.2053M3.4424 3.8186L4.7491 9.0453H13.3418L14.6485 3.8186ZM5.3867 12.1814C4.582 12.1814 4.0791 13.0525 4.4814 13.7494C4.6682 14.0728 5.0132 14.2721 5.3867 14.2721C6.1914 14.272 6.6944 13.4009 6.292 12.704C6.1052 12.3806 5.7602 12.1814 5.3867 12.1814M3.296 13.2267C3.2925 11.6173 5.0325 10.6076 6.4281 11.4093C7.0786 11.7829 7.479 12.4765 7.4774 13.2267C7.4739 14.8361 5.7294 15.8382 4.3374 15.0304C3.6942 14.6572 3.2976 13.9704 3.296 13.2267M12.7041 12.1814C11.8994 12.1814 11.3965 13.0525 11.7988 13.7494C11.9855 14.0728 12.3306 14.2721 12.7041 14.2721C13.5088 14.272 14.0118 13.4009 13.6094 12.704C13.4226 12.3806 13.0775 12.1814 12.7041 12.1814M10.6134 13.2267C10.6099 11.6173 12.3499 10.6076 13.7455 11.4093C14.396 11.7829 14.7964 12.4765 14.7948 13.2267C14.7913 14.8361 13.0468 15.8382 11.6548 15.0304C11.0116 14.6572 10.615 13.9704 10.6134 13.2267" strokeWidth="1"></path></svg>
            </div>
            <div className={styles.image_block}>
                <img src={props.imgURL} alt="" />
            </div>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.subtitle}>{props.subtitle}</span>
            <span className={styles.price}>{props.price}$</span>
        </div>
    )
}

export default Card;