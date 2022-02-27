import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import Button from "../../../UI/button/Button";
import FilterProducts from "./FilterProducts";

import styles from "./Products.module.scss";

const Products: FC = () => {
  const [numElement, setNumElement] = useState<number>(12);

  const { products } = useTypedSelector((state) => state.product);

  const loadMore = () => {
    setNumElement(numElement + numElement);
  };

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <FilterProducts numElement={numElement} />
      </div>

      {numElement < products.length && (
        <div className={styles.loadMore}>
          <Button h={40} w={200} br={8} onClick={loadMore}>
            Загрузить ещё...
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
