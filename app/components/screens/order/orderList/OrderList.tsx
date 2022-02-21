import React, { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Items from "./items/Items";

import styles from "./OrderList.module.scss";

const OrderList: FC = () => {
  const { amountCart } = useTypedSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Состав заказа</p>
      <Items />
      <div className={styles.amount}>
        <p className={styles.total}>Сумма заказа</p>
        <p className={styles.price}>{amountCart} ₽</p>
      </div>
      <div className={styles.delivery}>
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
};

export default OrderList;
