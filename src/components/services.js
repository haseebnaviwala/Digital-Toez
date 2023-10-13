import React, {useEffect, useRef} from 'react';
import './services.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import icon1 from "./images/icon01.png";
import icon2 from "./images/branding-01.png";
import icon3 from "./images/icon03.png";
import icon4 from "./images/icon04.png";
import icon5 from "./images/digital-marketing-01.png";
import icon6 from "./images/web-01.png";
import icon7 from "./images/app-01.png";
import icon8 from "./images/photography-01.png";
import icon9 from "./images/animation-01.png";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services(){

    const ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".servicecontainer"),
            {
                y: -1000,
                opacity: 0,
                transition: 1
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger: element.querySelector(".servicerow"),
                  start: "top center",
                  end: "top center",
                  scrub: true,
                },
            }
        )
      }, []);

    return(
        <div className='mainservices' ref={ref}>
            <h1>Services</h1>
            <div className='servicecontainer'>
                <div className='servicerow'>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon1}></img>
                                </div>
                                <h4>SEARCH ENGINE OPTIMIZATION</h4>
                                <p>Competition is tough! Get your website ranking a solution that will generate results at the lowest cost for the longest time.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon2}></img>
                                </div>
                                <h4>BRANDING</h4>
                                <p>A strong brand is always reflected in its visuals. Make your brand identity deliver the right message to the right audience.
                                </p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon3}></img>
                                </div>
                                <h4>MARKETING COLLATERAL</h4>
                                <p>Digital or Printed, your marketing collaterals are the reminders of your brand and develop an ever-lasting recall value. Make sure it attracts your target personas.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon4}></img>
                                </div>
                                <h4>CONTENT WRITING / MARKETING</h4>
                                <p>Do you know people’s habits change with every generation? Your content needs to be really targeting your audience with the right content tone and strategy.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon5}></img>
                                </div>
                                <h4>DIGITAL MARKETING</h4>
                                <p>The world seems to have shrunk down to social platforms. Do you think you have a strong strategy that has a higher and long-lasting impact?</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon6}></img>
                                </div>
                                <h4>WEBSITE DESIGNIGN & DEVELOPMENT</h4>
                                <p>Your brand is a powerful marketing tool that can drive sales and ensure that customers always think of you first.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon7}></img>
                                </div>
                                <h4>APP DESIGN & DEVELOPMENT</h4>
                                <p>If your business needs an app then you must have it! The habits are changing very frequently and everything needs to be on the fingertips. Design a user-friendly and attractive app.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon8}></img>
                                </div>
                                <h4>PHOTOGRAPHY</h4>
                                <p>Only right clicks pay you off! It's not just clicking, taking pictures, and uploading it. It takes a whole process to identify the best shots, editing it, and displaying it to get that attention your brand demands.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>

                    <div className="servicecard">
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={icon9}></img>
                                </div>
                                <h4>VIDEO & ANIMATIONS</h4>
                                <p>Probably while you are reading it, your audience is watching some interesting videos out there! Let’s create something that brings all their attention to you.</p>
                            </div>
                            <div className="shadowone"></div>
                            <div className="shadowtwo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}