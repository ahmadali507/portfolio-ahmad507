import React from "react";
import { b1 } from "../assets";
import "./skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills" className="section-p1">
    <h3>WHAT ARE OUR TECHNICAL SKILLS ?</h3>
        <div className="section">
          <div className="myimg">
            <img src={b1} alt="" />
          </div>

          <div className="skills-details">
            <h2 style={{color : 'seagreen'}}>What skills do we offer?</h2>
            <div className="skill skill-1">HTML/CSS....   <marquee behavior="" direction="">90%</marquee></div>
            <div className="skill skill-2">JAVA.............    <marquee behavior="" direction="">70%</marquee></div>
            <div className="skill skill-3">C/C++..........    <marquee behavior="" direction="">85%</marquee></div>
            <div className="skill skill-4">JAVASCRIPT   <marquee behavior="" direction="">85%</marquee></div>
            <div className="skill skill-5">REACT.JS..     <marquee behavior="" direction="">80%</marquee></div>
          </div>
        </div>
      </section>
    </>
  );
}
