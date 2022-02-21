import React, { FC, useState } from "react";
import { useActions } from "../../../../hooks/useActions";

import Button from "../../../UI/button/Button";

import styles from "./Selectors.module.scss";

const sizeButtons = [
  { id: 1, title: "Маленькая" },
  { id: 2, title: "Средняя" },
  { id: 3, title: "Большая" },
];

const categoriresButtons = [
  { id: 1, title: "Традиционное" },
  { id: 2, title: "Тонкое" },
];

const Selectors: FC = () => {
  const [size, setSize] = useState<string>("Маленькая");
  const [category, setCategory] = useState<string>("Традиционное");

  const { changeCategoryCurrProduct, changeSizeCurrProduct } = useActions();

  const changeSize = (size: string) => {
    setSize(size);
    changeSizeCurrProduct({ size: size });
  };

  const changeCategory = (category: string) => {
    setCategory(category);
    changeCategoryCurrProduct({ category: category });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sizes}>
        {sizeButtons.map(({ id, title }) => (
          <Button
            key={id}
            onClick={() => changeSize(title)}
            notActive={size !== title}
            w={115}
            h={34}
            br={8}
            fontSize={14}
          >
            {title}
          </Button>
        ))}
      </div>
      <div className={styles.categories}>
        {categoriresButtons.map(({ id, title }) => (
          <Button
            key={id}
            onClick={() => changeCategory(title)}
            h={34}
            br={8}
            notActive={category !== title}
            fontSize={14}
            margin="0px 5px"
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Selectors;
