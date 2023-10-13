import React, {useEffect, useRef} from "react";
import "./middlepart1.css";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Middlepart1(){

    const ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".middlepartfirst"),
            {
                x: 500,
                opacity: 0,
                scale: 1.2,
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                scrollTrigger: {
                  trigger: element.querySelector(".text1"),
                  start: "center center",
                  end: "bottom center",
                  scrub: true,
                },
            }
        )
      }, []);

      useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".middlepartsecond"),
            {
                opacity: 0,
                transition: 0.5,
                x: -1000,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: element.querySelector(".text2"),
                  start: "center center",
                  end: "bottom center",
                  scrub: true,
                },
            }
        )
      }, []);

      useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".middlepartthird"),
            {
                x: 1500,
                opacity: 0,
                transition: 0.5,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: element.querySelector(".text3"),
                  start: "top center",
                  end: "bottom center",
                  scrub: true,
                },
            }
        )
      }, []);

    return(
        <div className="middlepart1main" ref={ref}>
            <div className="middlepartfirst">
                <p className="text1">Digital Toez</p>
            </div>
            <div className="middlepartsecond">
                <p className="text2">We are the doers & We’re here to find solutions for your brand!</p>
            </div>
            <div className="middlepartthird">
                <p className="text3">From development to transformations, we bring the most impactful and customized strategies to take your brand where you want it to be. Rather than calling ourselves experts, we call ourselves life-long learners who adapt to the continuously changing trends and come up with the result-oriented strategies to keep the brands rocking in any era.</p>
            </div>
        </div>
    );
}