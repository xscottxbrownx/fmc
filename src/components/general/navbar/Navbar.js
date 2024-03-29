// Imports from React
import { useState } from "react";
// Imports from React Router
import { Link } from "react-router-dom";
// Imported assets
import FMC_logo from "../../../assets/navbar_logo_dropshadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// Imported stylesheet
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const navmenu = document.getElementsByClassName(classes.navlist)[0];
    navmenu.classList.toggle(classes.active);
  };

  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.navlogo}>
        <img src={FMC_logo} alt="FMC logo"></img>
      </Link>

      <button
        onClick={() => {
          handleClick();
          setActive(!active);
        }}
      >
        {active ? (
          <FontAwesomeIcon
            className={`${classes.closeIcon} fa-2x`}
            icon={faTimes}
          />
        ) : (
          <FontAwesomeIcon
            className={`${classes.hamburgerIcon} fa-2x`}
            icon={faBars}
          />
        )}
      </button>

      <div className={classes.navlist}>
        <ul>
          <li>
            <Link to="/About" className={classes.navlink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Team" className={classes.navlink}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/Vision" className={classes.navlink}>
              Vision
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className={classes.navlink}>
              Member Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
