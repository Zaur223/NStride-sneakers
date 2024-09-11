import styles from '../../styles/SalePageStyle/SaleContent.module.scss';
import Navigation from './Navigation';
import Slider from './Slider';
import SneakersItems from './SneakersItems';

const SaleContent = function() {
    return (
        <section className={styles.content}>
            <div className={styles.container}>
                <Slider />
                <div className={styles['content_wrapper']}>
                    <Navigation />
                    <SneakersItems />
                </div>
            </div>
        </section>
    )
}

export default SaleContent;