"use client"
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {

    const[isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu =() =>{
        setMenuOpen(!isMenuOpen);
    }


    return(
    <nav className="navbar-container">
        <button className="navbar-button" onClick={toggleMenu}><svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg></button>

        <div className={isMenuOpen? "navbar-menu expanded" : "navbar-menu"}>
        <ul className= "navbar-ul">
            <li> <a>PROJECTS</a></li>
            <li><a>EXPERIENCE</a></li>
            <li><a>EDUCATION</a></li>
            <li ><a className="contact-button">LET'S TALK</a></li>
        </ul>
        </div>
    </nav>)

};

export default Navbar;