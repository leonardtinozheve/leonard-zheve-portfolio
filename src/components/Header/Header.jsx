import React, {useState} from 'react';
import styles from "./Header.module.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function handleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
    <>
    <nav className={styles.navBar}>
        <a className={styles.title} href='/'>
            Portfolio
        </a>
    
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                src={isMenuOpen ? "/assets/pictures/menuClose.png" : "/assets/pictures/menuIcon.png"} 
                alt="menu-icon"
                onClick={handleMenuOpen}/>

            <ul className={`${styles.navLinks} ${isMenuOpen && styles.isMenuOpen}`} 
                onClick={() => setIsMenuOpen(false)}>
                <li>
                    <a href='#about'>About</a>
                </li>

                <li>
                    <a href='#experience'>Experiences</a>
                </li>

                <li>
                    <a href='#projects'>Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
        </ul>
        </div>
    </nav>
    </>
    );
}

export default Header;