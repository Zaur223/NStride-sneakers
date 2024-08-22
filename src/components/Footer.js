import styles from '../styles/Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logos}>
                    <a href="#"><img className={styles.logo} src="images/nitro.svg" /></a>
                    <div className={styles.media}>
                        <a href="#"><img src="images/instagram.svg" /></a>
                        <a href="#"><img src="images/facebook.svg" /></a>
                        <a href="#"><img src="images/X.svg" /></a>
                    </div>
                </div>
                <ul>
                    <a href="#"><li>Our store</li></a>
                    <a href="#"><li>About us</li></a>
                    <a href="#"><li>Company</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
                <span></span>
            </div>
        </footer>
    )
}

export default Footer;