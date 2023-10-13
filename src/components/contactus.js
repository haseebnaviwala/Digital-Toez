import React from 'react';
import './contactus.css';
import { MdRoom, MdCall } from "react-icons/md";

export default function Contactus(){
    return(
        <div className="contactusmain" id='contactus'>
            <div className='contactuslower'>
                <div className='hoverback'>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                    <div className='smallbox'></div>
                </div>
                <div className="contactusform">
                    <div className="contactusheading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="form">
                        <form>
                            <input type="text" className="name" placeholder="Name"></input>
                            <input type="email" className="email" placeholder="Email"></input>
                            <textarea id="message" name="message" rows="6" placeholder="Type your services here.."></textarea>
                        </form>
                    </div>
                    <div className="subbutton">
                        <p>Submit</p>
                    </div>
                </div>
                <div className="contactusdeatils">
                    <div className="intouch">
                        <h1>Get In Touch</h1>
                        <p style={{fontSize: "18px", fontWeight: "600"}}>We're just a thought away! Reach out to us.</p>
                        <p>We are life-long learning experts with a strong focus on generating results and boosting brand trust. Our work is driven by a thorough research and understanding customized for each brand to unlock its own potential value.</p>
                    </div>
                    <div className="bushours">
                        <h1>Contact Info</h1>
                        <p><MdRoom className='time'></MdRoom> 104 Business Forum Khalid bin waleed road Karachi Pakistan</p>
                        <p><MdCall className='time'></MdCall> +923 111 144 430</p>
                    </div>
                </div>
            </div>
        </div>
    );
}