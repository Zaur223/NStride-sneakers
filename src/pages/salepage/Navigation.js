import { useDispatch, useSelector } from 'react-redux';
import { catalogActions } from '../../store/catalog-slice';
import styles from '../../styles/SalePageStyle/Navigation.module.scss';

const Navigation = function() {
    const dispatchAction = useDispatch();
    const isCatalogActive = useSelector(state => state.catalog.isCatalogActive);
    const isPriceActive = useSelector(state => state.catalog.isPriceActive);
    const priceLimit = useSelector(state => state.catalog.priceLimit);

    const catalogSwiching = () => {
        dispatchAction(catalogActions.catalogToggle())
    }

    const priceSwiching = () => {
        dispatchAction(catalogActions.priceToggle())
    }
    
    const priceHandler = (event) => {
        const {value} = event.target;
        dispatchAction(catalogActions.priceChange(value));
    }

    const checkboxChangeHander = (event) => {
        const {value, checked} = event.target;

        if (checked) {
            dispatchAction(catalogActions.addItems(value));
        } else {
            dispatchAction(catalogActions.removeItems(value));
        }
    }

    const switchCatalogStyle = isCatalogActive ? `${styles.expand}` : `${styles.hide}`;
    const switchPriceStyle = isPriceActive ? `${styles.expand}` : `${styles.hide}`;
    const catalogClass = isCatalogActive ? styles.expanded : styles.collapsed;
    const priceClass = isPriceActive ? styles.expanded : styles.collapsed;

    return (
        <div className={styles.navigation}>
            <div className={`${styles['navigation_item']} ${styles.catalog} ${catalogClass}`}>
                <span className={`${styles['filter_name']}`} onClick={catalogSwiching}>PRODUCT LINE</span>
                <span className={`${styles['navigation-toggle']} ${switchCatalogStyle}`}></span>
                <ul>
                    <li>
                        <input 
                            type='checkbox' 
                            id="check1" 
                            value="Nike Blazer" 
                            onChange={checkboxChangeHander} 
                        />
                        <label htmlFor="check1">Nike Blazer</label>
                    </li>
                    <li>
                        <input 
                            type='checkbox' 
                            id="check2" 
                            value="Nike Air Force" 
                            onChange={checkboxChangeHander}
                        />
                        <label htmlFor="check2">Nike Air Force</label>
                    </li>
                    <li>
                        <input 
                            type='checkbox' 
                            id="check3" 
                            value="Nike Air Max Plus" 
                            onChange={checkboxChangeHander} 
                        />
                        <label htmlFor="check3">Nike Air Max Plus</label>
                    </li>
                    <li>
                        <input 
                            type='checkbox' 
                            id="check4" 
                            value="Nike FG" 
                            onChange={checkboxChangeHander} 
                        />
                        <label htmlFor="check4">Nike FG</label>
                    </li>
                    <li>
                        <input 
                            type='checkbox' 
                            id="check5" 
                            value="Nike Kobe" 
                            onChange={checkboxChangeHander} 
                        />
                        <label htmlFor="check5">Nike Kobe</label>
                    </li>
                </ul>
            </div>
            
            <div className={`${styles['navigation_item']} ${styles.price} ${priceClass}`}>
                <span className={`${styles['filter_name']}`} onClick={priceSwiching}>PRICE</span>
                <span className={`${styles['navigation-toggle']} ${switchPriceStyle}`}></span>
                <span className={styles['price_value']}>0$ - {priceLimit}$</span>
                <input type="range" min='0' max='2000' value={priceLimit} onChange={priceHandler} className={styles['price_range']}/>
            </div>
        </div>
    )
}

export default Navigation;