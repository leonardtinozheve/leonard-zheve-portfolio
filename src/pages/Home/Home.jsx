import React from "react";
import styles from "./Home.module.css"

function Home() {
    

    return(
        <>
        <section className={styles.container}>
        <div className={styles.content}>
                <h1 className={styles.title}>Hello! I am Leonard</h1>

                <p className={styles.description}>
                    I am an international student at Wesleyan University from Harare, Zimbabwe. I intend on 
                    majoring in Computer Science and Sociology. I am interested in solving technical problems 
                    and continuously learning new skills that will help me deliver valuable tech innovations. 
                    My end-goal is to work as a software developer in the fintech space, increasing accessibility
                    to electronic financial services in my home country and across Africa.
                </p>

                <button className={styles.aboutMe}>Learn more about me</button>
            </div>

            <img className={styles.headshot} src="src/pictures/Leonard_Zheve_Headshot.jpg" alt="headshot"/>

            <div className={styles.topBlur}/>

            <div className={styles.bottomBlur}/>

        </section>
           
        </>
    );
}

export default Home;