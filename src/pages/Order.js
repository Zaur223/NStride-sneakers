import { Fragment } from 'react';
import styles from '../styles/Order.module.scss';

const Order = function(props) {

    const cancelHandler = () => {
        props.onCancel(false);
    }
    const userData = JSON.parse(localStorage.getItem('user')) || {};

    return (
        <Fragment>
            <div className={styles.order}>
                <svg className={styles.cancel} onClick={cancelHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Delete-1--Streamline-Core" height="24" width="24"><desc>Delete 1 Streamline Icon: https://streamlinehq.com</desc><g id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math"><path id="Vector" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" d="m13.5 0.5 -13 13" strokeWidth="2"></path><path id="Vector_2" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" d="m0.5 0.5 13 13" strokeWidth="2"></path></g></svg>
                <svg className={styles['order_icon']} viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Check-Circle--Streamline-Solar-Ar" height="80" width="80"><desc>Check Circle Streamline Icon: https://streamlinehq.com</desc><path stroke="#00ff00" d="M1.25 7.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 1 0 -12.5 0" strokeWidth="1"></path><path d="m5.3125 7.8125 1.25 1.25 3.125 -3.125" stroke="#00ff00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path></svg>
                <h2>Order successfully accepted</h2>

                <div className={styles['order_info']}>
                    <p>country: {props.userData?.country || 'No country provided'}</p>
                    <p>city:  {props.userData?.city || 'No city provided'}</p>
                    <p>street: {props.userData?.street || 'No street provided'}</p>
                </div>
                <span className={styles['order_text']}>Mr/Mrs {userData.username || 'User'} Thank you for your order. Your order will arrive within approximately 3 work days.</span>
            </div>
        </Fragment>
    )
}

export default Order;