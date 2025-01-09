import React from "react";
import styles from "./About.module.css"


function About() {
    return(
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        
        <div className={styles.content}>
            <img src="src/pictures/otherpic.jpg" 
            alt="A selfie of me"
            className={styles.aboutImage}/>

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="src/pictures/full-stack.png"
                    className={styles.fullStack} 
                    alt="Full stack"/>
                    <div className={styles.aboutItemText}>
                        <h3>Aspring Full-Stack Software Engineer</h3>
                        <p>
                        I'm a software engineer focused on strengthening my backend skills, with experience 
                        in building scalable applications and integrating efficient, data-driven solutions.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="src/pictures/exchange.png"
                    className={styles.exchangePic}
                    alt="Community and tech"/>
                    <div className={styles.aboutItemText}>
                        <h3>Community-Driven Technologist</h3>
                        <p>
                        I am dedicated to fostering inclusivity in tech by collaborating on projects that uplift 
                        underrepresented communities and drive meaningful innovation.
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
    );
}

export default About

