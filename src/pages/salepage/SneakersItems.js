import {useState} from 'react';
import styles from '../../styles/SalePageStyle/SneakersItems.module.scss';
import Card from './Card';
import DUMMY_SNEAKERS from '../../data/dummySneakers';
import { useSelector } from 'react-redux';

const SneakersItems = function() {
    const selectedItems = useSelector(state => state.catalog.selectedItems);
    const priceLimit = useSelector(state => state.catalog.priceLimit);
    const [isHidden, setIsHidden] = useState(false);
    const [sortedSneakers, setSortedSneakers] = useState(DUMMY_SNEAKERS);

    const hideToggle = () => {
        setIsHidden(prevIsHidden => !prevIsHidden);
    }

    const sortAsc = () => {
        const sorted = [...sortedSneakers].sort((a, b) => a.price - b.price);
        setSortedSneakers(sorted)
    }

    const sortDesc = () => {
        const sorted = [...sortedSneakers].sort((a, b) => b.price - a.price);
        setSortedSneakers(sorted)
    }

    const generalFilter = sortedSneakers.filter(item => {
        const isPriceValid = item.price <= priceLimit;
        const isSelectedValid = selectedItems.length === 0 || selectedItems.includes(item.type);

        return isPriceValid && isSelectedValid;
    });

    const filterClass = isHidden ? `${styles.expand}` : `${styles.hide}`
    return (
        <div className={styles.sneakers}>
            <div className={styles.filter}>
                <button className={styles['filter_sort']} onClick={hideToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter" id="Filter--Streamline-Feather" height="18" width="18"><desc>Filter Streamline Icon: https://streamlinehq.com</desc><path d="M13.75 1.875 1.25 1.875l5 5.9125000000000005L6.25 11.875l2.5 1.25 0 -5.3374999999999995L13.75 1.875z" strokeWidth="1"></path></svg>
                    <span>Filter</span>
                </button>
                <div className={`${styles['filter_block']} ${filterClass}`}>
                    <span onClick={sortDesc}>Highest price</span>
                    <span onClick={sortAsc}>Lowest price</span>
                </div>
            </div>
            <div className={styles.sneakers_wrapper}>
                {generalFilter.map((obj) => (
                    <Card
                        key={obj.id}
                        imgURL={obj.imgURL}
                        title={obj.title}
                        subtitle={obj.subtitle}
                        price={obj.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default SneakersItems;