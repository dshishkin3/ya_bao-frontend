import Image from "next/image";
import React, { FC, useState } from "react";

import styles from "./CreditCard.module.scss";

import info from "/public/order/info.png";

const CreditCard: FC = () => {
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");

  if (number.length === 4 || number.length === 9 || number.length === 14) {
    setNumber(number + " ");
  }

  if (time.length === 2) {
    setTime(time + "/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <input
          type="number"
          placeholder="Номер карты"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          maxLength={19}
        />
        <div className={styles.footer}>
          <input
            placeholder="Истекает"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            maxLength={5}
          />
          <input placeholder="CVC" maxLength={3} type="password" />
        </div>
      </div>
      <div className={styles.info}>
        <Image src={info} alt="" />
      </div>
    </div>
  );
};

export default CreditCard;
