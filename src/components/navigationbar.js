import React, {useEffect} from 'react';
import './navigationbar.css';
import { FaBars } from 'react-icons/fa';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io';

export default function Navigationbar(){

    useEffect(() => {
        var navButton = document.querySelector('.navigation-button');
        var navMenu = document.querySelector('.navigation-menu');
        var win = window;

        let menuToggle = document.querySelector('.menuToggle');
        menuToggle.onclick = function(){
            menuToggle.classList.toggle('active')
        }
        
        function openMenu(event) {
            navButton.classList.toggle('active');
            navMenu.classList.toggle('active');
            event.preventDefault();
            event.stopImmediatePropagation();
        }
        
        function closeMenu(event) {
            if(navButton.classList.contains('active')) {
                navButton.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
        navButton.addEventListener('click', openMenu, false);
        win.addEventListener('click',closeMenu, false); 
    });

    return(
        <div>
            <div className="navigation-wrapper">
                <div className="navigation-button">
                    <i className="fa"><FaBars></FaBars></i>
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">CASE STUDIES</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                        <li><a href="#">PRIVACY POLICY</a></li>
                    </ul>
                </div>
            </div>
            <div className="navigate">
                <div className="menuToggle"></div>
                <div className="menu">
                    <ul>
                        <li><a href="#"><IoLogoFacebook></IoLogoFacebook></a></li>
                        <li><a href="#"><IoLogoInstagram></IoLogoInstagram></a></li>
                        <li><a href="#"><IoLogoLinkedin></IoLogoLinkedin></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}