
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
                    
                    <li>
                        Contact
                    </li>

                </ul>
            </div>

            <div className="socials">
                <ul>
                    <li a href="">
                        leonardt.zheve@gmail.com
                    </li>

                    <li a href="">
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