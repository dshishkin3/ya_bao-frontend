import React, { FC } from "react";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";

import styles from "./Items.module.scss";

const Items: FC = () => {
  const { products } = useTypedSelector((state) => state.cart);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product._id} className={styles.product}>
          <div className={styles.info}>
            <p className={styles.title}>{product.title}</p>

            {product.type === "pizza" && (
              <p className={styles.subtitle}>
                {product.size}, {product.category} тесто
              </p>
            )}
          </div>
          <p className={styles.price}>{product.price}₽</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
