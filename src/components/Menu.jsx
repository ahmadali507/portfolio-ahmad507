import React from 'react';
import './menu.css'; // Import CSS for styling


const Menu = () => {


  return (
    <div className="menu-bar">
      <ul className="menu-options">
        <li><a href="#home" >Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
  );
}

export default Menu;
