import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useRouter } from "next/router";
import { useActions } from "../../../hooks/useActions";

import Product from "./product/Product";
import Heading from "../../UI/heading/Heading";
import SwiperBlock from "../../UI/cartSwiper/Swiper";
import Sauces from "./sauces/Sauces";
import Final from "./final/Final";

import styles from "./Cart.module.scss";

const Cart: FC = () => {
  const { products } = useTypedSelector((state) => state.cart);
  const { user } = useTypedSelector((state) => state.user);

  const { closeCartPopup } = useActions();

  const router = useRouter();

  // need fix
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    closeCartPopup();
  }, [user]);

  return (
    <div className={styles.container}>
      <Heading size="big">Корзина</Heading>
      <div className={styles.products}>
        {products.map((product, i) => (
          <Product key={product._id + i} product={product} />
        ))}
      </div>
      {/* <Heading size="small" margin="0px 0px 40px 0px">
        Добавить к заказу?
      </Heading>
      <SwiperBlock type="page" /> */}
      <Sauces />
      <Final />
    </div>
  );
};

export default Cart;
