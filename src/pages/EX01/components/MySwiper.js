import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay } from "swiper";

import "./MySwiper.scss";
import "../scss/2.contents.scss";
const MySwiper = (props) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >
        {props.swiperInfo.map((info, index) => (
          <SwiperSlide key={index}>
            <p className="time">{info.day}</p>
            <p className="nick-name">{info.info}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MySwiper;
