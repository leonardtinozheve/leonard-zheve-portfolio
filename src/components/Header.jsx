import React, { useState } from 'react';


function Header() {
    
    
    return(
        <header className='header'>
            <img className="page-icon" src="src/pictures/myLogo.png" alt='menu-button'></img>

            <nav>
                <ul className='nav-links'>
                    <li>
                        About
                    </li>

                    <li>
                        Projects
                    </li>

                    <li>
                        Experiences
                    </li>

                    <li>
                        Contact
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;