import { Fragment } from 'react';

import styles from './Promo.module.scss';
import '../assets/fonts/fonts.scss';


function Promo() {
    return (
			<Fragment>
				<header className={styles.promo}>
					<nav className={styles.nav}>
						<div className={`${styles.container} ${styles.pos}`}>
							<a href="#"><img src='/images/Logo.png' /></a>
							<div className={styles['promo_menu']}>
								<ul className={styles['promo_menu_li']}>
									<li><a href='#'>Our Store</a></li>
									<li><a href='#'>About Us</a></li>
									<li><a href='#'>Contact</a></li>
								</ul>
								<button className={styles['promo_login']}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="User--Streamline-Feather" height="25" width="25"><desc>User Streamline Icon: https://streamlinehq.com</desc><path d="M12.5 13.125v-1.25a2.5 2.5 0 0 0 -2.5 -2.5H5a2.5 2.5 0 0 0 -2.5 2.5v1.25" strokeWidth="1"></path><path d="M5 4.375a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" strokeWidth="1"></path></svg>
									<span>sing up</span>
								</button>
								<div className={styles.hamburger}>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</nav>

					<div className={styles.container}>
						<div className={styles['content_wrapper']}>
							<div className={styles['content_wrapper-text']}>
								<h1 className={styles['content_wrapper-maintext']}>The 2019 Nike <br></br>Chinese Collection</h1>
								<h3 className={styles['content_wrapper-subtext']}>Two styles of graphics are used to represent this throughout the collection: The first is a traditional geometric quilt pattern that is influenced by all 12 Chinese Zodiac symbols; the second is a mosaic pattern of the 12 symbols.</h3>
								<button className={styles['content_wrapper-btn']}>Learn More</button>
							</div>
							<div className={styles['content_wrapper-img']}>
								<img className={styles['nike-back']} src='/images/sneaker_fon.png' />
								<img className={styles.nike} src='/images/Nike_Air_Max_Plus.png' />
							</div>
						</div>
					</div>
				</header>
			</Fragment>
    )
}

export default Promo;


