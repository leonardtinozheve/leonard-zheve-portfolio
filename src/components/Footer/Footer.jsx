
function Footer() {
    

    return(
        <footer>
            <div className="nav-links">
                <ul>
                    
                    <li>
                        Home
                    </li>

                    <li>
                        About
                    </li>

                    <li>
                        Experiences
                    </li>

                    <li>
                        Projects
                    </li>
                    
                    <li a href="#contacts">
                        Contact
                    </li>

                </ul>
            </div>

            <div className="socials">
                <ul>
                    <li a href="mailto:leonardt.zheve@gmail.com">
                        leonardt.zheve@gmail.com
                    </li>

                    <li a href="https://www.linkedin.com/in/leonard-zheve/">
                        My LinkedIn
                    </li>

                    <li a href=""> 
                        My GitHub
                    </li>
                </ul>
            </div>

            <img className="page-icon" src="src/pictures/myLogo.png" alt="page-icon"/>
        </footer>
    );
}

export default Footer