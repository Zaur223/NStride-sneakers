import styles from '../styles/Info.module.scss';

function Info() {
    return (
        <div className={styles.info}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.maintext}>Lorem ipsum</h2>
                    <ul>
                        <li className={styles.subtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li className={styles.subtext}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                        <li className={styles.subtext}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
                    </ul>
                    <button className={styles.btn}><span>Show now</span></button>
                </div>
                <div className={styles.images}>
                    <img src="images/nike1.png" alt=""/>
                    <img src="images/nike2.png" alt=""/>
                    <img src="images/nike3.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Info;