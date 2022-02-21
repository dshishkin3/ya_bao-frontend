import Image from "next/image";
import React, { FC } from "react";

import styles from "./Card.module.scss";

type Card = {
  id: number;
  image: string;
  text: string;
};

interface ICardProps {
  card: Card;
}

const Card: FC<ICardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.ellipse}>
        <Image src={card.image} alt="" />
      </div>
      <p>{card.text}</p>
    </div>
  );
};

export default Card;
