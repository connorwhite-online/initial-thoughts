import styles from '../styles/menu.module.css';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.navBox}><a href='https://indd.adobe.com/embed/29ff1f14-a1ee-48dc-a6c2-e70bb720387a?startpage=1&allowFullscreen=true' target="_blank" rel="noopener noreferrer" className={styles.navLink}>Our Work</a></div>
            <div className={styles.navBox}><a href='mailto:get@byseanbrown.com' className={styles.navLink}>Contact</a></div>
        </div>
    )
}