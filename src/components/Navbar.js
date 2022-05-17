import React from 'react';
import FMC_logo from '../assets/navbar_logo_dropshadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const handleClick = () => {
    const navmenu = document.getElementsByClassName('navlist')[0];
    navmenu.classList.toggle('active');
}


const Navbar = () => {
    return(
        <div>
            <nav className='navbar'>
                <div className='navlogo'>
                    <Link to="/">
                        <img src={FMC_logo} alt="FMC logo" height="60" width="60"></img>
                    </Link>
                </div>
                {/* USE STATE INSTEAD OF THIS? - NEED TO CHANGE ICON TO X WHEN ACTIVE */}
                <btn className='hamburger-menu fa-2x' onClick={handleClick}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></btn>
                <div className='navlist'>
                    <ul>
                        <li><Link to="/about" className='navlink'>About</Link></li>
                        <li><Link to="/dashboard" className='navlink'>Member Dashboard</Link></li>
                        {/*<li><a href="#about" className='navlink'>About</a></li>
                        <li><a href="#dashboard" className='navlink'>Member Dashboard</a></li>
                        <li><a href="https://furusmintclub.gitbook.io/fmc-genesis-whitepaper/" className='navlink' target='_blank' rel="noopener noreferrer">Whitepaper</a></li>*/}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;