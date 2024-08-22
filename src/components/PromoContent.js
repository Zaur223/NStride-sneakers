import styles from '../styles/PromoContent.module.scss';

function PromoContent() {
    return (
        <div className={styles.container}>
            <div className={styles['content_wrapper']}>
                <div className={styles['content_wrapper-text']}>
                    <h1 className={styles['content_wrapper-maintext']}>The 2019 Nike <br></br>Chinese Collection</h1>
                    <h3 className={styles['content_wrapper-subtext']}>Two styles of graphics are used to represent this throughout the collection: The first is a traditional geometric quilt pattern that is influenced by all 12 Chinese Zodiac symbols; the second is a mosaic pattern of the 12 symbols.</h3>
                    <button className={styles['content_wrapper-btn']}><span>Learn More</span></button>
                </div>
                <div className={styles['content_wrapper-img']}>
                    <img className={styles['nike-back']} src='/images/sneaker_fon.png' />
                    <img className={styles.nike} src='/images/Nike_Air_Max_Plus.png' />
                </div>
            </div>
        </div>
    )
}

export default PromoContent;