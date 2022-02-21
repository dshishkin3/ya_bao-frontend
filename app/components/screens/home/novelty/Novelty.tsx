import React, { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Novetly.module.scss";
import "swiper/css";

import Item from "./item/Item";

const Novelty: FC = () => {
  const { products } = useTypedSelector((state) => state.product);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Новинки</p>
      <div className={styles.products}>
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
        >
          {products.slice(3, 7).map((product) => (
            <SwiperSlide
              key={product._id}
              style={{ padding: "20px 15px", filter: "blur(0px)" }}
            >
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Novelty;
