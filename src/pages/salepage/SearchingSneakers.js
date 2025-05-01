import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/SalePageStyle/SearchingSneakers.module.scss";

const SearchingSneakers = (props) => {
    const history = useHistory();

    const goToProductPage = () => {
        
        history.push({
            pathname: '/sneakers',
            state: props,
        })
        window.scrollTo(0, 0);
    }

    return (
        <li className={styles.sneakers} onClick={goToProductPage}>
            <img className={styles.sneakers_img} src={props.imgURL} alt='' />
            <p className={styles.sneakers_title}>{props.title}</p>
        </li>
    )
}

export default SearchingSneakers;