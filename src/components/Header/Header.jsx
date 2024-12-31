import React, {useState} from 'react';


function Header() {
    
    
    return(
    <>
    <nav className='nav-bar'>
        <a className='page-icon'>
        <img className="page-icon" src="src/pictures/myLogo.png" alt='page-icon'/>
        </a>
    
        <div className='menu'>
            <img className="menu-btn" src="src/pictures/menuIcon.png" alt="menu-icon"/>
            <ul className='nav-links'>
                <li>
                    <a>About</a>
                </li>

                <li>
                    <a>Projects</a>
                </li>

                <li>
                    <a>Experiences</a>
                </li>

                <li>
                    <a>Contact</a>
                </li>
        </ul>
        </div>
    </nav>
    </>
    );
}

export default Header;