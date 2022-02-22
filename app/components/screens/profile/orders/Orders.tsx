import Image from "next/image";
import React, { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import Heading from "../../../UI/heading/Heading";

import styles from "./Orders.module.scss";

const Orders: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <Heading size="big">Мои заказы</Heading>
      <div className={styles.orders}>
        {user?.orders.map((order, i) => (
          <div className={styles.order} key={i}>
            <span className={styles.hashtag}># {+i + 1}</span>
            <p>
              Адрес доставки:
              <span> {order.address}</span>
            </p>
            <p>
              Время доставки:<span> {order.timeToDelivery}</span>
            </p>
            <p>
              Способ оплаты: <span> {order.paymentMethod}</span>
            </p>
            <p>
              Сумма заказа: <span>{order.amount} руб.</span>
            </p>
            <div className={styles.products}>
              {order.products.map(({ _id, title, urlImg }) => (
                <div className={styles.product} key={_id}>
                  <Image src={urlImg} alt="" width={70} height={70} />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {user?.orders.length === 0 && (
          <p className={styles.emptyOrders}>Вы ещё не оформляли заказы :(</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
