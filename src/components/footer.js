import React, {useEffect} from "react";
import "./footer.css";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io';

  

export default function Footer() {
    return (
        <div className="foot_container">
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social_icon">
                    <li><a href="#"><IoLogoFacebook></IoLogoFacebook></a></li>
                    <li><a href="#"><IoLogoTwitter></IoLogoTwitter></a></li>
                    <li><a href="#"><IoLogoLinkedin></IoLogoLinkedin></a></li>
                    <li><a href="#"><IoLogoInstagram></IoLogoInstagram></a></li>
                </ul>
                <ul className="footerMenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
                <p>&copy;2021 Digital Toez | Step into the world of technology</p>
            </footer>
        </div>
    );
}