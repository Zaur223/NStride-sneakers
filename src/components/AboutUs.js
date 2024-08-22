import styles from '../styles/AboutUs.module.scss';

function AboutUs() {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>About Us</h2>
                        <div className={styles.subtitle}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been <br /><br />the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br /><br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.images_col1}>
                            <img src="images/about-us_img1.png" />
                            <img src="images/about-us_img2.png" />
                            <img src="images/about-us_img3.png" />
                        </div>
                        <div className={styles.images_col2}>
                            <img src="images/about-us_img4.png" />
                            <img src="images/about-us_img5.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;