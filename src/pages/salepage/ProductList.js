import styles from '../../styles/SalePageStyle/ProductList.module.scss';

const ProductsList = (props) => {
    return (
        <li>
            <div className={styles.product}>
                <img src={props.imgURL} alt="" className={styles.product_img} />
                <div className={styles.product_text}>
                    <p className={styles.product_title}>{props.title}</p>
                    <span className={styles.product_price} >{props.price}$</span>
                    <button className={styles.product_btn} >Buy</button>
                </div>
            </div>
        </li>
    )
}

export default ProductsList;