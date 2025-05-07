import {Fragment, useState } from 'react';
import styles from '../styles/UserInfo.module.scss';

const UserInfo = function(props) {
    const [userInfo, setUserInfo] = useState({
        country: '',
        city: '',
        street: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onHiddenUserInfo()
        props.onUserInfo(userInfo)
    }

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value });
    }

    const cancelHandler = () => {
        props.onHiddenUserInfo()
    }

    const userInfoStyle = props.isUserInfoActive ? `${styles['info_active']}` : ``
    return (
        <Fragment>
            <div className={`${styles.info} ${userInfoStyle}`}>
                <svg className={styles.cancel} onClick={cancelHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Delete-1--Streamline-Core" height="24" width="24"><desc>Delete 1 Streamline Icon: https://streamlinehq.com</desc><g id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math"><path id="Vector" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" d="m13.5 0.5 -13 13" strokeWidth="2"></path><path id="Vector_2" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" d="m0.5 0.5 13 13" strokeWidth="2"></path></g></svg>
                <h2 className={styles['info_text']}>Please fill in the address</h2>
                <form className={styles['info_form']} onSubmit={handleSubmit} >
                    <input 
                        className={styles['info_form-input']} 
                        name="country" 
                        type="text" 
                        onChange={handleChange}
                        placeholder='Country' 
                        required />
                    <input 
                        className={styles['info_form-input']} 
                        name="city" 
                        type='text'
                        onChange={handleChange}
                        placeholder='City' 
                        required />
                    <input 
                        className={styles['info_form-input']} 
                        name="street" 
                        type="text"
                        onChange={handleChange}
                        placeholder='Street' 
                        required />
                    <button type='submit' className={styles['info_form-btn']}>confirm</button>
                </form>
            </div>
        </Fragment>
    )
}

export default UserInfo;