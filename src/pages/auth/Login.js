import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';
import styles from '../../styles/authStyles/Login.module.scss';

const Login = function() {
    const dispatchAction = useDispatch();
    const formToggle = useSelector(state => state.form.formToggle);

    const formHandler = () => {
        dispatchAction(formActions.toggle());
    }

    const formClasse = formToggle ? `${styles.active}` : `${styles.hide}`;

    return (
        <div className={`${styles['form_block']} ${formClasse}`}>
            <form className={styles.form}>
                <div className={styles['input_block']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className={styles['form_icon']} id="Mail--Streamline-Feather" height="26" width="26"><desc>Mail Streamline Icon: https://streamlinehq.com</desc><path d="M2.5 2.5h10c0.6875 0 1.25 0.5625 1.25 1.25v7.5c0 0.6875 -0.5625 1.25 -1.25 1.25H2.5c-0.6875 0 -1.25 -0.5625 -1.25 -1.25V3.75c0 -0.6875 0.5625 -1.25 1.25 -1.25z" strokeWidth="1"></path><path d="m13.75 3.75 -6.25 4.375L1.25 3.75" strokeWidth="1"></path></svg>
                    <input type="email" placeholder='Email' />
                </div>

                <div className={styles['input_block']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className={styles['form_icon']} id="Lock--Streamline-Feather" height="26" width="26"><desc>Lock Streamline Icon: https://streamlinehq.com</desc><path d="M3.125 6.875h8.75s1.25 0 1.25 1.25v4.375s0 1.25 -1.25 1.25H3.125s-1.25 0 -1.25 -1.25v-4.375s0 -1.25 1.25 -1.25" strokeWidth="1"></path><path d="M4.375 6.875V4.375a3.125 3.125 0 0 1 6.25 0v2.5" strokeWidth="1"></path></svg>
                    <input type="password" placeholder='Password' />
                </div>
                <p className={styles['forgot_pwd']}><a href="/auth">Forgot password?</a></p>
                <p className={styles.acc}>Don’t have an account? <span onClick={formHandler}>Sign Up</span></p>
                <button className={styles['form_btn']} >Login</button>
            </form>
            <button className={`${styles['google_login']} ${styles.logining}`}>
                    <img src='images/google.svg' alt="" /> 
                    Login with Google
            </button>
        </div>
    )
}

export default Login;