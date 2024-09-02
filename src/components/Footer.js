import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logos}>
                    <a href="/"><img className={styles.logo} src="images/nitro.svg" alt=""/></a>
                    <div className={styles.media}>
                        <a href="/"><img src="images/instagram.svg" alt=""/></a>
                        <a href="/"><img src="images/facebook.svg" alt=""/></a>
                        <a href="/"><img src="images/X.svg" alt=""/></a>
                    </div>
                </div>
                <ul>
                    <li><Link to="/sale">Our store</Link></li>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Company</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <span></span>
            </div>
        </footer>
    )
}

export default Footer;