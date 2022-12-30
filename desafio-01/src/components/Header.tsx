import styles from './Header.module.css'

import logo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logotype}>
                <img className={styles.logo} src={logo} alt="rocket logo"/>
                <div className={styles.type}><span className={styles.to}>to</span><span
                    className={styles.do}>do</span></div>
            </div>
        </header>
    )
}