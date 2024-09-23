import styles from '../styles/PromoContent.module.scss';

function PromoContent() {
    return (
        <div className={styles.container}>
            <div className={styles['content_wrapper']}>
                <div className={styles['content_wrapper-text']}>
                    <h1 className={styles['content_wrapper-maintext']}>Welcome to <br/>our website Nitro</h1>
                    <h3 className={styles['content_wrapper-subtext']}>Here you'll find the latest trends, trusted brands, and exclusive models that are perfect for both active adventures and everyday life. Comfort, style, and quality - all in one place. Visit our website to discover your perfect pair of sneakers that will highlight your unique style and provide comfort with every step!</h3>
                    <a href='#info' className={styles['content_wrapper-btn']}><span>Learn More</span></a>
                </div>
                <div className={styles['content_wrapper-img']}>
                    <img className={styles['nike-back']} src='/images/sneaker_fon.png' alt=""/>
                    <img className={styles.nike} src='/images/Nike_Air_Max_Plus.png' alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PromoContent;