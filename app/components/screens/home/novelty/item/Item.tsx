import Image from "next/image";
import React, { FC } from "react";
import { useActions } from "../../../../../hooks/useActions";
import { IProduct } from "../../../../shared/interfaces/product.interface";

import styles from "./Item.module.scss";

interface IItemProps {
  product: IProduct;
}

const Item: FC<IItemProps> = ({ product }) => {
  const { openProductPopup, setCurrentProduct } = useActions();

  const selectProduct = () => {
    setCurrentProduct({
      ...product,
      defaultPrice: product.price,
      count: 1,
    });
    openProductPopup();
  };

  return (
    <div className={styles.container} onClick={selectProduct}>
      <Image src={product.urlImg} alt="" width={70} height={70} />
      <div className={styles.info}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>от {product.price} ₽</p>
      </div>
    </div>
  );
};

export default Item;
