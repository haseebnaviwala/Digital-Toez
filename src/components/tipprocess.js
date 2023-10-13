import React from "react";
import "./tipprocess.css";
import { Swiper, SwiperSlide } from "swiper/react";
import research from "./images/research.jpg";
import home2 from "./images/home-2.jpg";
import imagehome from "./images/image-home.jpg";

import { EffectCoverflow, Pagination } from "swiper";

export default function Tipprocess(){
    return(
        <div className="tipprocess">
            <div className="testimonials">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 0,
                        slideShadows: false,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <div className="swiper-wrapper">

                        <SwiperSlide>
                            <div className="card" style={{background: `url(${home2})`, backgroundSize: "cover"}}>
                                <div className="layer"></div>
                                <div className="content">
                                    <h1>1</h1>
                                    <div className="details">
                                        <h2>Research</h2>
                                    </div>
                                    <p>We are curious to dig further into your brand and find all the hidden treasures</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="card" style={{background: `url(${imagehome})`, backgroundSize: "cover"}}>
                                <div className="layer"></div>
                                <div className="content">
                                    <h1>2</h1>
                                    <div className="details">
                                        <h2>Optimization</h2>
                                    </div>
                                    <p>We optimize our strategy base on our findings and your requirements</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="card" style={{background: `url(${research})`, backgroundSize: "cover"}}>
                                <div className="layer"></div>
                                <div className="content">
                                    <h1>3</h1>
                                    <div className="details">
                                        <h2>User Friendly</h2>
                                    </div>
                                    <p>Finally what's the point without successfully executing the strategy</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>
                </Swiper>
            </div>
        </div>
    );
}