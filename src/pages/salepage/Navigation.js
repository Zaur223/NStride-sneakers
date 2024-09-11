import {useState} from 'react';
import styles from '../../styles/SalePageStyle/Navigation.module.scss';

const Navigation = function() {
    const [isCatalogActive, setIsCatalogActive] = useState(false);
    const [isPriceActive, setIsPriceActive] = useState(false);
    const [priceValue, setPriceValue] = useState(50)

    const catalogToggle = () => {
        setIsCatalogActive(prevIsCatalogActive => !prevIsCatalogActive);
    }

    const priceToggle = () => {
        setIsPriceActive(prevIsPriceActive => !prevIsPriceActive);
    }
    
    const priceHandler = (event) => {
        setPriceValue(event.target.value)
    }

    const switchCatalogStyle = isCatalogActive ? `${styles.expand}` : `${styles.hide}`;
    const switchPriceStyle = isPriceActive ? `${styles.expand}` : `${styles.hide}`;
    const catalogClass = isCatalogActive ? styles.expanded : styles.collapsed;
    const priceClass = isPriceActive ? styles.expanded : styles.collapsed;

    return (
        <div className={styles.navigation}>
            <div className={`${styles['navigation_item']} ${styles.catalog} ${catalogClass}`}>
                <span className={`${styles['filter_name']}`} onClick={catalogToggle}>PRODUCT LINE</span>
                <span className={`${styles['navigation-toggle']} ${switchCatalogStyle}`}></span>
                <ul>
                    <li>
                        <input type='checkbox' id="check1" />
                        <label htmlFor="check1">Nike Blazer</label>
                    </li>
                    <li>
                        <input type='checkbox' id="check2" />
                        <label htmlFor="check2">Nike Air Force</label>
                    </li>
                    <li>
                        <input type='checkbox' id="check3" />
                        <label htmlFor="check3">Nike Air Max Plus</label>
                    </li>
                    <li>
                        <input type='checkbox' id="check4" />
                        <label htmlFor="check4">Nike FG</label>
                    </li>
                    <li>
                        <input type='checkbox' id="check5" />
                        <label htmlFor="check5">Nike Kobe</label>
                    </li>
                </ul>
            </div>
            
            <div className={`${styles['navigation_item']} ${styles.price} ${priceClass}`}>
                <span className={`${styles['filter_name']}`} onClick={priceToggle}>PRICE</span>
                <span className={`${styles['navigation-toggle']} ${switchPriceStyle}`}></span>
                <span className={styles['price_value']}>0$ - {priceValue}$</span>
                <input type="range" min='0' max='10000' value={priceValue} onChange={priceHandler} className={styles['price_range']}/>
            </div>
        </div>
    )
}

export default Navigation;