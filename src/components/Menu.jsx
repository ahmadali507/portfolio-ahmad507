import React from 'react';
import './menu.css'; // Import CSS for styling

const Menu = () => {
  const handleclick = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="menu-bar">
      <ul className="menu-options">
        <li><a href="#home" onClick={() => handleclick("home")}>Home</a></li>
        <li><a href="#details" onClick={() => handleclick("details")}>About Us</a></li>
        <li><a href="#contact" onClick={() => handleclick("contact")}>Contact</a></li>
        <li><a href="#grow" onClick={() => handleclick("grow")}>Details</a></li>
        <li><a href="#skull" onClick={() => handleclick("skull")}>Projects</a></li>
      </ul>
    </div>
  );
};

export default Menu;
