import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { PiGoogleChromeLogoBold } from "react-icons/pi";
import { useRef } from "react";

import "./Footer.css";

function Footer() {
    const instaRef = useRef(null); 
    const facebookRef = useRef(null); 
    const googleRef = useRef(null); 
                                                                                                                                                                
    const handleclick= () =>{
      window.location.target = "_blank"
      window.location.href = "https://www.instagram.com/ahmad.__ali.__507/"
    }
 // writing some pure js to go to the websites . 
 const handlefacebookclick= () =>{
  
     window.location.target = "_blank"
    
    window.location.href = "http://www.facebook.com"
}
const handlegoogleclick= () =>{
  window.location.target = "_blank"

    window.location.href = "http://www.google.com"
}                                                               
    
  return (
    <footer  >
      <div className="footer"> 
        <div className="details">
          <h4 className="contact">CONTACT :</h4>
          <BsTelephone /> : <span> +92-302-4744600</span>
          <h4 className="contact">EMAIL :</h4>
          <FaLocationDot /> : <span> contact@gmail.com</span>
          <h4 className="contact">LOCATION :</h4>
          <MdEmail /> : <span>NUST H-12, ISLAMABAD, PAKISTAN</span>
        </div>

        <div className="links">
          <h5>SOCIAL LINKS TO FOLLOW</h5>
          <div> 
            <h4 className="facebook" ref = {facebookRef} onClick={handlefacebookclick}>
              <IoLogoFacebook /> Facebook
            </h4>
          </div>
          <div >
            <h4 className="instagram" ref = {instaRef} onClick={handleclick}>
              <BsInstagram /> Instagram
            </h4>
          </div>
          <div>
            <h4 className="chrome" ref = {googleRef} onClick={handlegoogleclick}>
              <PiGoogleChromeLogoBold /> Chrome
            </h4>
          </div>
        </div>
      </div>
        <div className="footer-legal">
            <h5>
            &copy; | AHMAD ALI SHAHID |  2024 Your Name
            Privacy Policy | Terms of Service
            </h5>
          
        </div>
    </footer>
  );
}

export default Footer;
