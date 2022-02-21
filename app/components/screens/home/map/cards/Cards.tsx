import React, { FC } from "react";

import styles from "./Cards.module.scss";

import Card from "./Card/Card";

import cardImg1 from "/public/home/cards/card1.svg";
import cardImg2 from "/public/home/cards/card2.svg";
import cardImg3 from "/public/home/cards/card3.svg";
import cardImg4 from "/public/home/cards/card4.svg";

const Cards: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

const cards = [
  {
    id: 1,
    image: cardImg1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    image: cardImg2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    image: cardImg3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 4,
    image: cardImg4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
