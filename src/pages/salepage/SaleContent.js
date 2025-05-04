import { useState, useEffect } from 'react';
import styles from '../../styles/SalePageStyle/SaleContent.module.scss';
import Navigation from './Navigation';
import Slider from './Slider';
import SneakersItems from './SneakersItems';
import AddingProduct from './AddingProduct';

const SaleContent = function() {
    const [user, setUser] = useState(null);
    const [isBtnActive, setIsBtnActive] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])


    const ownerBtnStyle = isBtnActive ? `${styles['owner_btn_active']}` : ``;

    return (
        <section className={styles.content}>
            <div className={styles.container}>
                <Slider />
                <div className={styles['content_wrapper']}>
                    <Navigation />
                    <SneakersItems />
                </div>
            </div>

            {user?.role === "owner" && 
                <div className={`${styles.owner_btn} ${ownerBtnStyle}`} onClick={(e) => setIsBtnActive(!isBtnActive)}>
                    <span></span>
                    <span></span>
                </div>
            }
            <AddingProduct isBtnActive={isBtnActive} />

        </section>
    )
}

export default SaleContent;