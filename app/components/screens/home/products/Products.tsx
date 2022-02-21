import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import Product from "./product/Product";
import Button from "../../../UI/button/Button";

import styles from "./Products.module.scss";

const Products: FC = () => {
  const [numElement, setNumElement] = useState<number>(12);

  const { category, products } = useTypedSelector((state) => state.product);

  const loadMore = () => {
    setNumElement(numElement + numElement);
  };

  const slice = products.slice(0, numElement);

  // категория - все продукты
  const allProducts = slice.map((product) => (
    <Product key={product._id} product={product} />
  ));

  // категория - ???
  const categoryProducts = products
    .filter((product) => product.type === category)
    .map((product) => <Product key={product._id} product={product} />);

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {category === "Все" ? allProducts : categoryProducts}
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
