import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Download from "./Download";

function Slider() {
  return (
    <section className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div className="text">
              <h1>Markup: Title With Special Characters</h1>
              <p>
                Markup: Title With Special Characters ~`!@#$%^&*()-_=+{}
                []/;:'”?,. Putting special characters in the title should have
                no adverse effect on the layout or functionality. Special
                characters in the post title have been known to cause issues
                with JavaScript when it is minified, especially in the admin
                when editing the post itself ie. issues with metaboxes, media
                upload, […]
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div className="text">
              <h1>Markup: HTML Tags and Formatting</h1>
              <p>
                Headings Header one Header two Header three Header four Header
                five Header six Blockquotes Single line blockquote: Stay hungry.
                Stay foolish. Multi line blockquote with a cite reference:
                People think focus means saying yes to the thing you’ve got to
                focus on. But that’s not what it means at all. It means saying
                no to […]
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div className="text">
              <h1>Markup: Image Alignment</h1>
              <p>
                Welcome to image alignment! The best way to demonstrate the ebb
                and flow of the various image positioning options is to nestle
                them snuggly among an ocean of words. Grab a paddle and let’s
                get started.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Download />
    </section>
  );
}

export default Slider;
