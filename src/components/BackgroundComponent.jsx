import React from "react";
import "./CoveredComponent.css"; // Import CSS for styling
import { back } from "../assets";

const BackgroundComponent = () => {
  return (
    <div id="home">
      <div className="background-component">
        <img src={back} alt="" />hello
      </div>
    </div>
  );
};

export default BackgroundComponent;
