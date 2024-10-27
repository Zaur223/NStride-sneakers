import styles from '../../styles/authStyles/Auth.module.scss';
import AuthForm from './AuthForm';

const Auth = function() {
    return (
        <div className={styles.content}>
            <div className={styles.auth}>
                <h2 className={styles.title}>Sign Up</h2>
                <img className={styles['auth_deco']} src="images/auth_deco.png" alt="" />
                <div className={styles['auth_wrapper']}>
                    <AuthForm />
                    <div className={styles['img_block']}>
                        <img className={styles['signUp_img']} src='/images/nitro_site.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;