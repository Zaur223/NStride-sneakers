import Header from './Header';
import PromoContent from './PromoContent';
import styles from '../styles/Promo.module.scss';
import '../assets/fonts/fonts.scss';
import { Fragment } from 'react';


function Promo() {
    return (
		<Fragment>
			<div className={styles.promo}>
				<Header />
				<PromoContent />
			</div>
			<img className={styles.sneakers} src='/images/image_sneakers.png' />
		</Fragment>
    )
}

export default Promo;


