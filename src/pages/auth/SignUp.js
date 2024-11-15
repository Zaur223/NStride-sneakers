import { formActions } from '../../store/form-slice';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/authStyles/SignUp.module.scss';

const SignUp = function() {
    const dispatchAction = useDispatch();
    const formToggle = useSelector(state => state.form.formToggle);

    const formHandler = () => {
        dispatchAction(formActions.toggle());
    }

    const formClasse = formToggle ? `${styles.hide}` : `${styles.active}`;

    return (
        <div className={`${styles['form_block']} ${formClasse}`}>
                <form className={styles.form}>
                    <div className={styles['input_block']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className={styles['form_icon']} id="User--Streamline-Feather" height="26" width="26"><desc>User Streamline Icon: https://streamlinehq.com</desc><path d="M12.5 13.125v-1.25a2.5 2.5 0 0 0 -2.5 -2.5H5a2.5 2.5 0 0 0 -2.5 2.5v1.25" strokeWidth="1"></path><path d="M5 4.375a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" strokeWidth="1"></path></svg>
                        <input type="text" placeholder='Username' />
                    </div>

                    <div className={styles['input_block']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className={styles['form_icon']} id="Mail--Streamline-Feather" height="26" width="26"><desc>Mail Streamline Icon: https://streamlinehq.com</desc><path d="M2.5 2.5h10c0.6875 0 1.25 0.5625 1.25 1.25v7.5c0 0.6875 -0.5625 1.25 -1.25 1.25H2.5c-0.6875 0 -1.25 -0.5625 -1.25 -1.25V3.75c0 -0.6875 0.5625 -1.25 1.25 -1.25z" strokeWidth="1"></path><path d="m13.75 3.75 -6.25 4.375L1.25 3.75" strokeWidth="1"></path></svg>
                        <input type="email" placeholder='Email' />
                    </div>

                    <div className={styles['input_block']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className={styles['form_icon']} id="Lock--Streamline-Feather" height="26" width="26"><desc>Lock Streamline Icon: https://streamlinehq.com</desc><path d="M3.125 6.875h8.75s1.25 0 1.25 1.25v4.375s0 1.25 -1.25 1.25H3.125s-1.25 0 -1.25 -1.25v-4.375s0 -1.25 1.25 -1.25" strokeWidth="1"></path><path d="M4.375 6.875V4.375a3.125 3.125 0 0 1 6.25 0v2.5" strokeWidth="1"></path></svg>
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className={styles['input_block']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className={styles['form_icon']} id="Lock--Streamline-Feather" height="26" width="26"><desc>Lock Streamline Icon: https://streamlinehq.com</desc><path d="M3.125 6.875h8.75s1.25 0 1.25 1.25v4.375s0 1.25 -1.25 1.25H3.125s-1.25 0 -1.25 -1.25v-4.375s0 -1.25 1.25 -1.25" strokeWidth="1"></path><path d="M4.375 6.875V4.375a3.125 3.125 0 0 1 6.25 0v2.5" strokeWidth="1"></path></svg>
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                    
                    <p>Already have an account? <span onClick={formHandler}>Login</span></p>
                    <button className={styles['form_btn']}>Sign Up</button>
                </form>
                <button className={styles['google_login']}>
                    <img src='images/google.svg' alt="" /> 
                    Sign Up with Google
                </button>
        </div>
    )
}

export default SignUp;