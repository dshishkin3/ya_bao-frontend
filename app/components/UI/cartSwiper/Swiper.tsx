import Image from "next/image";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addProduct } from "../../../store/cart/cart.actions";

import styles from "./Swiper.module.scss";

interface ISwiperBlockProps {
  type: "popup" | "page";
}

const SwiperBlock: FC<ISwiperBlockProps> = ({ type }) => {
  const { user } = useTypedSelector((state) => state.user);
  const { products } = useTypedSelector((state) => state.product);

  const dispatch = useDispatch();

  const addToCart = (product: any) => {
    if (typeof window !== "undefined") {
      const token = String(localStorage.getItem("token"));
      dispatch(addProduct({ product, token }));
    }
  };

  return (
    <div className={type === "page" ? styles.page : styles.popup}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          1200: {
            slidesPerView: type === "popup" ? 2 : 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },

          350: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={true}
        centeredSlides={true}
      >
        {products.slice(16, 19).map((product) => (
          <SwiperSlide
            key={product._id}
            onClick={user ? () => addToCart(product) : () => {}}
            style={{ filter: "blur(0px)", opacity: user ? "1" : "0.3" }}
          >
            <div
              className={type === "page" ? styles.cardPage : styles.cardPopup}
            >
              <Image src={product.urlImg} alt="" width={80} height={80} />
              <div className={styles.information}>
                <p>{product.title}</p>
                <p className={styles.price}>от {product.price} руб</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBlock;
