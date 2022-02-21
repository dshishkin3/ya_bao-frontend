import Image from "next/image";
import React, { FC } from "react";
import { useActions } from "../../../../../hooks/useActions";
import { IProduct } from "../../../../shared/interfaces/product.interface";
import { v1 as uuidv1 } from "uuid";

import Button from "../../../../UI/button/Button";

import styles from "./Product.module.scss";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
  const { openProductPopup, setCurrentProduct } = useActions();

  const selectProduct = () => {
    setCurrentProduct({
      ...product,
      _id: uuidv1(),
      defaultPrice: product.price,
      category: "Традиционное",
      size: "Маленькая",
      count: 1,
    });
    openProductPopup();
  };

  return (
    <div className={styles.container} onClick={selectProduct}>
      <div className={styles.imgBlock}>
        <Image
          src={product.urlImg}
          alt=""
          width={250}
          height={250}
          quality={100}
          placeholder="blur"
          blurDataURL="https://dodopizza-a.akamaihd.net/site-static/dist/611f501db3a3369fac31.svg"
        />
      </div>
      <p className={styles.title}>{product.title}</p>
      <p className={styles.subtitle}>
        {product.subtitle.length > 125
          ? product.subtitle.slice(0, 125) + "..."
          : product.subtitle}
      </p>
      <div className={styles.footerBlock}>
        <p className={styles.price}>от {product.price} ₽</p>
        <Button w={126} h={36} br={23}>
          Выбрать
        </Button>
      </div>
    </div>
  );
};

export default Product;
