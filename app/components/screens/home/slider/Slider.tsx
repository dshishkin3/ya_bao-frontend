import Image from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import styles from "./Slider.module.scss";
import "swiper/css";

const sliderItems = [
  { id: 1, src: "/home/slider/slider-1.png" },
  { id: 2, src: "/home/slider/slider-2.png" },
  { id: 3, src: "/home/slider/slider-3.png" },
];

const SliderBlock: FC = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className={styles.container}>
      <Swiper
        autoplay={true}
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
      >
        {sliderItems.map(({ id, src }) => (
          <SwiperSlide key={id}>
            <Image
              src={src}
              alt=""
              className={styles.img}
              width={1000}
              height={370}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBlock;
