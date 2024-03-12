import React from 'react';
import './nav.css'; // Import CSS for styling
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from 'react';

const Navbar = () => {

  const [visible , setVisible] = useState(false);
  // creating a bool to check whether to hide the menu or not. 
  const handleClick = () => {
    let menu = document.querySelector(".menu-bar"); 
    let width = menu.offsetWidth; 
    // getting the menu-bar using the dommanipulation in js .
    

if(width > 900){
  setVisible(!visible);
  if(visible){
    menu.style.transform  = "translate(0vw, 0vw)"; 
  }
  else 
  menu.style.transform = "translate(20vw, 0vw)"; 
}
else if(width <= 900){
  setVisible(!visible);
  if(visible){
    menu.style.transform  = "translate(0vw, 0vw)"; 
  }
  else 
  menu.style.transform = "translate(40vw, 0vw)"; 
}

}
  return (
    <nav className="navbar" id = "top">
      <div className="navbar-container">
        <h1 className="navbar-logo">Your Logo</h1>
        <div className="items">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home" >Menu</a></li>
          <li className="navbar-item"><a href="#home" onClick={handleClick}><TfiMenuAlt/></a></li>

        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
