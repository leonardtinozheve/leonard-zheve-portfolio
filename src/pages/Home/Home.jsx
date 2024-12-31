import React from "react";

function Home() {
    

    return(
        <>
            <div className="introduction">
                <h2>Hello! I am Leonard</h2>

                <p>
                    An aspiring full-stack software engineer. <br/>

                    A solution-oriented thinker and community advocate. <br/>

                </p>

                <img className="headshot" src="src/pictures/Leonard_Zheve_Headshot.jpg" alt="headshot"/>
            </div>

            <div className="about-me-home">
                <p>
                    I am an international student at Wesleyan University from Harare, Zimbabwe. I intend on 
                    majoring in Computer Science and Sociology. I am interested in solving technical problems 
                    and continuously learning new skills that will help me deliver valuable tech innovations. 
                    My end-goal is to work as a software developer in the fintech space, increasing accessibility
                    to electronic financial services in my home country and across Africa.
                </p>

                <button  className="about-me">Learn more about me</button>
            </div>

            <div className="">
                
            </div>
        </>
    );
}

export default Home;