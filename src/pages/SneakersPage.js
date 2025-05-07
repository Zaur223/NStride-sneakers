import { Fragment, useState } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./salepage/Header";
import styles from "../styles/SneakersPage.module.scss"
import PaymentCard from "./salepage/PaymentCard";
import UserInfo from "./UserInfo";
import Order from "./Order";

const SneakersPage = function() {
    const [isPaymentActive, setIsPaymentActive] = useState(false)
    const [isUserInfoActive, setIsUserInfoActive] = useState(false)
    const [userData, setUserData] = useState({})
    const [isOrderListActive, setIsOrderListActive] = useState(false)
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const location = useLocation();
    const product = location.state;

    const paymentHandler = () => {
        setIsUserInfoActive(true);
    }

    const hideUserInfo = () => {
        setIsUserInfoActive(false);
    }

    const userInfoHandler = (info) => {
        setUserData(info)
        setIsPaymentActive(true)
    }

    const orderHandle = (e) => {
        setIsOrderListActive(true)
    }

    const cancelHandler = (e) => {
        setIsOrderListActive(e)
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        const user = JSON.parse(localStorage.getItem('user')) || { username: 'Anonymous' };
      
        const newComment = {
          date: new Date().toLocaleDateString('tr-TR'),
          name: user.username,
          text: commentText.trim(),
        };
      
        setComments([newComment, ...comments]);
        setCommentText('');
      };

    return (
        <>
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

                    {!isPaymentActive && (
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
                            <button onClick={paymentHandler}>BUY</button>
                        </div>
                    )}
                    {isPaymentActive && <PaymentCard onIsOrderActive={orderHandle} />}
                </div>

                <div className={styles.sneakers_comments}>
                    <h2 className={styles['sneakers_comments-title']}>Comments</h2>
                    <form onSubmit={formHandler}>
                    <input
                        className={styles['sneakers_comments-input']}
                        type="text"
                        placeholder="Write a comment"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                        <button className={styles['sneakers_comments-btn']}>post a comment</button>
                    </form>

                    <ul className={styles['sneakers_comments-users']}>
                        {comments.map((comment, index) => (
                            <li key={index} className={styles['sneakers_comments-user']}>
                            <p className={styles['sneakers_comments-date']}>{comment.date}</p>
                            <p className={styles['sneakers_comments-name']}>
                                {comment.name[0] + '*'.repeat(comment.name.length - 1)}
                            </p>
                            <p className={styles['sneakers_comments-text']}>{comment.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <UserInfo isUserInfoActive={isUserInfoActive} onHiddenUserInfo={hideUserInfo} onUserInfo={userInfoHandler} />
            {isOrderListActive && <Order userData={userData} onCancel={cancelHandler} />}
        </>
    )
}

export default SneakersPage;