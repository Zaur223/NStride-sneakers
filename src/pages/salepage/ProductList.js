import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { productActions } from '../../store/product.slice';
import styles from '../../styles/SalePageStyle/ProductList.module.scss';
import { useDispatch } from 'react-redux';

const ProductsList = (props) => {
    const dispatchAction = useDispatch()
    const history = useHistory()

    const goToProductPage = () => {
        history.push({
            pathname: '/sneakers',
            state: props,
        })
    }

    const button = (e) => {
        e.stopPropagation()
    }

    const cancelHandler = (e) => {
        e.stopPropagation();
        dispatchAction(productActions.removeFavorite(props.id));
        dispatchAction(productActions.removeCard(props.id));
    }

    return (
        <li onClick={goToProductPage} >
            <div className={styles.product}>
                <img src={props.imgURL} alt="" className={styles.product_img} />
                <div className={styles.product_text}>
                    <p className={styles.product_title}>{props.title}</p>
                    <span className={styles.product_price} >{props.price}$</span>
                    <svg className={styles.product_cancel} onClick={cancelHandler} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Cancel--Streamline-Outlined-Material" height="20" width="20"><desc>Cancel Streamline Icon: https://streamlinehq.com</desc><g id="cancel"><path id="Vector" d="m8.25 16.8 3.75 -3.75 3.75 3.75 1.05 -1.05 -3.75 -3.75 3.75 -3.75 -1.05 -1.05 -3.75 3.75 -3.75 -3.75 -1.05 1.05 3.75 3.75 -3.75 3.75 1.05 1.05ZM12 22c-1.36665 0 -2.65835 -0.2625 -3.875 -0.7875 -1.21665 -0.525 -2.27915 -1.24165 -3.1875 -2.15 -0.908335 -0.90835 -1.625 -1.97085 -2.15 -3.1875C2.2625 14.65835 2 13.36665 2 12c0 -1.38335 0.2625 -2.68335 0.7875 -3.9 0.525 -1.21665 1.241665 -2.275 2.15 -3.175 0.90835 -0.9 1.97085 -1.6125 3.1875 -2.1375C9.34165 2.2625 10.63335 2 12 2c1.38335 0 2.68335 0.2625 3.9 0.7875 1.21665 0.525 2.275 1.2375 3.175 2.1375 0.9 0.9 1.6125 1.95835 2.1375 3.175C21.7375 9.31665 22 10.61665 22 12c0 1.36665 -0.2625 2.65835 -0.7875 3.875 -0.525 1.21665 -1.2375 2.27915 -2.1375 3.1875 -0.9 0.90835 -1.95835 1.625 -3.175 2.15C14.68335 21.7375 13.38335 22 12 22Zm0 -1.5c2.36665 0 4.375 -0.82915 6.025 -2.4875C19.675 16.35415 20.5 14.35 20.5 12c0 -2.36665 -0.825 -4.375 -2.475 -6.025C16.375 4.325 14.36665 3.5 12 3.5c-2.35 0 -4.35415 0.825 -6.0125 2.475C4.329165 7.625 3.5 9.63335 3.5 12c0 2.35 0.829165 4.35415 2.4875 6.0125C7.64585 19.67085 9.65 20.5 12 20.5Z" fill="#ff0000" strokeWidth="0.5"></path></g></svg>
                    <button className={styles.product_btn} onClick={button} >Buy</button>
                </div>
            </div>
        </li>
    )
}

export default ProductsList;