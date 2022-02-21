import React, { FC } from "react";

import styles from "./Progress.module.scss";

import ProgressItem from "./progressItem/ProgressItem";

const Progress: FC = () => {
  const progressItems = [
    { id: "1", title: "Корзина", pathname: "/cart", number: 1 },
    { id: "2", title: "Оформление заказа", pathname: "/order", number: 2 },
    { id: "3", title: "Заказ принят", pathname: "/complete", number: 3 },
  ];

  return (
    <div className={styles.container}>
      {progressItems.map((item) => (
        <div key={item.id}>
          <ProgressItem item={item} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Progress;
