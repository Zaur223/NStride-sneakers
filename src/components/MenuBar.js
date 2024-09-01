import { useSelector } from 'react-redux';
import styles from '../styles/MenuBar.module.scss';


function MenuBar() {
    const isHamburgerActive = useSelector(state => state.main.isHamburgerActive)

    const barStyle = !isHamburgerActive ? `` : `${styles.active}`

    return (
        <div className={`${styles.bar} ${barStyle}`}>
            <div className={styles.menu}>
                <ul className={styles['menu_li']}>
                    <li><a href='/'>Our Store</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
                <button className={styles['menu_login']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="User--Streamline-Feather" height="25" width="25"><desc>User Streamline Icon: https://streamlinehq.com</desc><path d="M12.5 13.125v-1.25a2.5 2.5 0 0 0 -2.5 -2.5H5a2.5 2.5 0 0 0 -2.5 2.5v1.25" strokeWidth="1"></path><path d="M5 4.375a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" strokeWidth="1"></path></svg>
                    <span>sing up</span>
                </button>
            </div>
        </div>
    )
}

export default MenuBar;