import { Fragment } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./salepage/Header";
import styles from "../styles/SneakersPage.module.scss"

const SneakersPage = function() {

    const location = useLocation();
    const product = location.state;

    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <div className={styles.sneakers}>
                    <div className={styles.sneakers_images}>

                        <div className={styles.img_list}>
                            <div className={styles.test_img}>
                                <img src={product.imgURL} alt="" />
                            </div>
                            <div className={styles.test_img}>
                                <img src={product.imgURL} alt="" />
                            </div>
                            <div className={styles.test_img}>
                                <img src={product.imgURL} alt="" />
                            </div>
                            <div className={styles.test_img}>
                                <img src={product.imgURL} alt="" />
                            </div>
                        </div>

                        <div className={styles.main_img}>
                            <img src={product.imgURL} alt="" />
                        </div>
                    </div>

                    <div className={styles.sneakers_info}>
                        <h2>{product.title}</h2>
                        <h3>{product.subtitle}</h3>
                        <img className={styles.starts} src='./images/starts.png' alt="" />
                        <p className={styles.saller}>seller: <a href="/sneakers">Tonny H</a></p>
                        <ul className={styles.sizes}>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                            <li>45</li>
                        </ul>
                        <p className={styles.returns}>
                            <img src="./images/return.svg" alt="" />
                            Returns Within 14 Days
                        </p>
                        <p className={styles.price}>{product.price}$</p>
                        <button>BUY</button>
                    </div>
                </div>

                <div className={styles.sneakers_comments}>
                    <h2 className={styles['sneakers_comments-title']}>Comments</h2>
                    <form>
                        <input className={styles['sneakers_comments-input']} type="text" placeholder="Write a comment" />
                        <button className={styles['sneakers_comments-btn']}>post a comment</button>
                    </form>

                    <ul className={styles['sneakers_comments-users']}>
                        <li className={styles['sneakers_comments-user']}>
                            <p className={styles['sneakers_comments-date']}>04.05.2025</p>
                            <p className={styles['sneakers_comments-name']}>J****</p>
                            <p className={styles['sneakers_comments-text']}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </li>

                        <li className={styles['sneakers_comments-user']}>
                            <p className={styles['sneakers_comments-date']}>03.08.2025</p>
                            <p className={styles['sneakers_comments-name']}>A*******</p>
                            <p className={styles['sneakers_comments-text']}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, dummy text ever since the 1500s,</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default SneakersPage;