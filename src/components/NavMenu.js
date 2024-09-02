import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/NavMenu.module.scss';
import { mainActions } from '../store/main-slice';

function NavMenu() {
    const dispatchAction = useDispatch()
    const isHamburgerActive = useSelector(state => state.main.isHamburgerActive)

    const hamburgerToggle = () => {
        dispatchAction(mainActions.hamburgerActive())
    }

    const hamburgerStyle = isHamburgerActive ? `${styles.active}` : ``

   return (
    <nav className={styles.nav}>
        <div className={styles.container}>
            <a href="/"><img src='/images/Logo.png' alt=""/></a>
            <div className={styles.menu}>
                <ul className={styles['menu_li']}>
                    <li><Link to='/sale'>Our Store</Link></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
                <button className={styles['menu_login']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="User--Streamline-Feather" height="25" width="25"><desc>User Streamline Icon: https://streamlinehq.com</desc><path d="M12.5 13.125v-1.25a2.5 2.5 0 0 0 -2.5 -2.5H5a2.5 2.5 0 0 0 -2.5 2.5v1.25" strokeWidth="1"></path><path d="M5 4.375a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" strokeWidth="1"></path></svg>
                    <span>sing up</span>
                </button>
            </div>
            <div className={`${styles.hamburger} ${hamburgerStyle}`} onClick={hamburgerToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div>
    </nav>
   )
}

export default NavMenu;