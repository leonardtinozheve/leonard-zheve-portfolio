import React from "react";
import styles from "./Footer.module.css";


function Footer() {
    

    return(
        <footer id="contact" className={styles.container}>
            
            <div className={styles.text}>
                <h2>Contact Me</h2>
                <p>Feel free to reach out</p>
            </div>
            

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/contacts/gmail.png" 
                    alt="Gmail icon"/>
                    <a href="mailto:leonardt.zheve@gmail.com">leonardt.zheve@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src="/contacts/linkedin.png" 
                    alt="LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/leonard-zheve/">My LinkedIn</a>
                </li>

                <li className={styles.link}>
                    <img src="/contacts/github.png" 
                    alt="GitHub icon"/>
                    <a href="https://github.com/leonardtinozheve">My GitHub profile</a>
                </li>
            </ul>
            
            
        </footer>
    );
}

export default Footer