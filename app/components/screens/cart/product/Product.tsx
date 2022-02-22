import Image from "next/image";
import React, { FC } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  changeCount,
  removeProduct,
} from "../../../../store/cart/cart.actions";
import { ICart } from "../../../shared/interfaces/product.interface";

import styles from "./Product.module.scss";

interface IProductProps {
  product: ICart;
}

const Product: FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const changeCountHandler = (operation: string) => {
    if (typeof window !== "undefined") {
      if (operation === "decrement" && product.count === 1) {
        return;
      }
      const token = String(localStorage.getItem("token"));
      dispatch(
        changeCount({ _id: product._id, operation: operation, token: token })
      );
    }
  };

  const removeItem = () => {
    if (typeof window !== "undefined") {
      const token = String(localStorage.getItem("token"));

      dispatch(
        removeProduct({ _id: product._id, price: product.price, token: token })
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Image src={product.urlImg} alt="" width={80} height={80} />
        <div className={styles.info}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.subtitle}>{product.subtitle}</p>
          {product.extension && (
            <p className={styles.extension}>
              допольнительно: {product.extension.title}
            </p>
          )}
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.price}>{product.price} ₽</p>
        <div className={styles.counter}>
          <button onClick={() => changeCountHandler("decrement")}>-</button>
          <p>{product.count || 1}</p>
          <button onClick={() => changeCountHandler("increment")}>+</button>
        </div>
        <RiDeleteBinLine
          size={22}
          className={styles.delete}
          onClick={removeItem}
        />
      </div>
    </div>
  );
};

export default Product;
