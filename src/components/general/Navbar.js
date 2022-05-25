import FMC_logo from '../../assets/navbar_logo_dropshadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {

    const [active, setActive] = useState(false);
  
    const handleClick = () => { 
        const navmenu = document.getElementsByClassName('navlist')[0];
        navmenu.classList.toggle('active');
    }


    return(
        <nav className='navbar'>
            <Link to="/" className='navlogo'>
                <img src={FMC_logo} alt="FMC logo"></img>
            </Link>
            <btn onClick={ () => { handleClick(); setActive(!active)} }>
                { active ? <FontAwesomeIcon className='close-icon fa-2x' icon={faTimes} /> : <FontAwesomeIcon className='hamburger-icon fa-2x' icon={faBars} /> } 
            </btn>
            <div className='navlist'>
                <ul>
                    <li><Link to="/About" className='navlink'>About</Link></li>
                    {/* use Team, Discord, and Whitepaper components in ABOUT */}
                    <li><Link to="/Newbie" className='navlink'>NEWbie University</Link></li>
                    <li><Link to="/Dashboard" className='navlink'>Member Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;