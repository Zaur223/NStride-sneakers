import styles from '../../styles/SalePageStyle/SaleContent.module.scss';
import Slider from './Slider';

const SaleContent = function() {
    return (
        <section className={styles.content}>
            <div className={styles.container}>
                <Slider />
            </div>
        </section>
    )
}

export default SaleContent;