import React, { useState } from 'react';



function Header() {
    
    
    return(
        
        <nav className="navigation-bar">
            <a className="web-icon" href="/"></a>

                <div className="nav-menu">
                    <ul className="menu-items">
                    
                        <li>
                            <a href="#about"></a>About
                        </li>

                        <li>
                            <a href="#about"></a>Work Experiences
                        </li>

                        <li>
                            <a href="/"></a>Projects
                        </li>

                        <li>
                            <a href="/"></a>Blog
                        </li>

                        <li>
                            <a href="/"></a>Contact
                        </li>
                    </ul>
                </div>
               
           </nav> 
    );
}

export default Header