import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/Info.module.scss';

function Info() {
    return (
        <div id="info" className={styles.info}>
            <div className={styles.container}>
                <div className={styles['info_wrapper']}>
                    <div className={styles.text}>
                        <h2 className={styles.maintext}>About our store</h2>
                        <ul>
                            <li className={styles.subtext}>Here you’ll find a vast selection of sneakers for every need and style.</li>
                            <li className={styles.subtext}>Discover the latest models, unique designs, and trusted brands that offer the perfect balance of comfort, quality, and fashion. </li>
                            <li className={styles.subtext}>Looking for sneakers for workouts, casual strolls, or outdoor adventures? We have exactly what you need! Explore our catalog, choose your perfect pair, and feel confident with every step.</li>
                        </ul>
                        <Link to="/sale" onClick={() => window.scrollTo(0,0)}>
                            <button className={styles.btn}><span>Show now</span></button>
                        </Link>
                    </div>
                    <div className={styles.image}>
                        <img src='images/nstride_site.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;