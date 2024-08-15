import Header from './Header';
import PromoContent from './PromoContent';
import styles from '../styles/Promo.module.scss';
import '../assets/fonts/fonts.scss';


function Promo() {
    return (
			<div className={styles.promo}>
				<Header />
				<PromoContent />
			</div>
    )
}

export default Promo;


