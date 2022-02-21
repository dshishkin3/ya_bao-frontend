import React, { FC } from "react";

import Cards from "./cards/Cards";

import styles from "./Map.module.scss";

const Cart: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Оплата и доставка</p>
        <Cards />
        <div className={styles.mapBlock}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d864.050141879536!2d34.10475240606085!3d44.95241436765854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1643273882194!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Cart;
