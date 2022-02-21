import React, { FC } from "react";

import styles from "./Information.module.scss";

const Information: FC = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.delivery}>
        <p className={styles.deliveryTitle}>
          Доставка <span className={styles.city}>Москва</span>
        </p>
        <div className={styles.timeToDelivery}>
          <p>Время доставки</p> <div className={styles.point}></div> от 31 мин
        </div>
      </div>
      <div className={styles.feedback}>
        <a href="tel:+88003333662" className={styles.number}>
          8 800 333-36-62
        </a>
      </div>
    </div>
  );
};

export default Information;
