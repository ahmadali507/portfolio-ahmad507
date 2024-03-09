
import React from 'react';
import './CoveredComponent.css'; // Import CSS for styling
import {back} from '../assets';

const BackgroundComponent = () => {
  return (
    <div className="background-component">  
    <img src={back} alt="" /> 
    </div>
  );
}

export default BackgroundComponent;