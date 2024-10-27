import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/NotReadyPage.module.scss';

const NotReadyPage = function() {
    return (
        <div className={styles.content}>
            <div className={styles['content_block']}>
                <span>Sorry, this page is not ready yet :)</span>
                <Link to="/">
                    <button>Go back</button>
                </Link>
            </div>
        </div>
    )
}

export default NotReadyPage;