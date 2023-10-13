import React, {useEffect, useRef} from "react";
import "./middlepart2.css";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Middlepart2(){

    const ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".middlepart2first"),
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
                  trigger: element.querySelector(".text4"),
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
            element.querySelector(".middlepart2second"),
            {
                opacity: 0,
                transition: 0.5,
                x: -1000,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: element.querySelector(".text5"),
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
            element.querySelector(".middlepart2third"),
            {
                x: 1500,
                opacity: 0,
                transition: 0.5,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: element.querySelector(".text6"),
                  start: "top center",
                  end: "bottom center",
                  scrub: true,
                },
            }
        )
      }, []);

    return(
        <div className="middlepart2main" ref={ref}>
            <div className="middlepart2first">
                <p className="text4">RESULT-DRIVEN SOLUTIONS</p>
            </div>
            <div className="middlepart2second">
                <p className="text5">In today’s world, no defined pattern makes sense!</p>
            </div>
            <div className="middlepart2third">
                <p className="text6">We are life-long learning experts with a strong focus on generating results and boosting brand trust. We are different because we believe in bringing new ideas to the table for every client. Our work is driven by a thorough research and understanding customized for each brand to unlock its own potential value.</p>
            </div>
        </div>
    );
}