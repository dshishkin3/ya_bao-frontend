import Link from "next/link";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { fetchCart } from "../../../../store/cart/cart.actions";

import Item from "./item/Item";
import Button from "../../../UI/button/Button";
import SwiperBlock from "../../../UI/cartSwiper/Swiper";

import styles from "./Cart.module.scss";

const Cart: FC = () => {
  const { isCartPopup, products, amountCart } = useTypedSelector(
    (state) => state.cart
  );
  const { user } = useTypedSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const token = String(localStorage.getItem("token"));
        dispatch(fetchCart(token));
      }, 1000);
    }
  }, [user]);

  return (
    <CSSTransition
      in={isCartPopup}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <div className={styles.container}>
        <div className={styles.items}>
          {products.length === 0 && (
            <p className={styles.emptyCart}>
              Вы ещё не добавляли товары в корзину! ☹
            </p>
          )}
          {products?.map((product, index) => (
            <Item key={`${index}_${product._id}`} item={product} />
          ))}
        </div>
        <div className={styles.sum}>
          <p>Сумма заказа:</p>
          <p className={styles.orderPrice}>{amountCart} ₽</p>
        </div>
        <div className={styles.addition}>
          <p className={styles.addToOrder}>Добавить к заказу?</p>
          <SwiperBlock type="popup" />
        </div>
        <div
          className={styles.goOrder}
          style={{ opacity: products.length > 0 ? "1" : "0.3" }}
        >
          <Link href={products.length > 0 ? "/cart" : ""}>
            <a>
              <Button h={42} br={8}>
                Перейти к заказу
              </Button>
            </a>
          </Link>
          {products.length < 1 && (
            <p className={styles.helpOrder}>
              Чтобы перейти к заказу добавьте хотя бы один товар :)
            </p>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Cart;
