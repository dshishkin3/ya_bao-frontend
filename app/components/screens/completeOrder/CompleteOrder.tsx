import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import styles from "./CompleteOrder.module.scss";

const CompleteOrder: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.container}>
      <p>Спасибо!</p>
      <p>Заказ передан службе доставки &#129392;</p>
      <h1>Вы автоматически покинете эту страницу через 3 сек... </h1>
    </div>
  );
};

export default CompleteOrder;
