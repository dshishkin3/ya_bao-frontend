import Image from "next/image";
import React, { FC } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  changeCount,
  removeProduct,
} from "../../../../../store/cart/cart.actions";
import { ICart } from "../../../../shared/interfaces/product.interface";

import styles from "./Item.module.scss";

interface IItemProps {
  item: ICart;
}

const Item: FC<IItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const changeCountHandler = (operation: string) => {
    if (typeof window !== "undefined") {
      if (operation === "decrement" && item.count === 1) {
        return;
      }
      const token = String(localStorage.getItem("token"));
      dispatch(
        changeCount({ _id: item._id, operation: operation, token: token })
      );
    }
  };

  const removeItem = () => {
    if (typeof window !== "undefined") {
      const token = String(localStorage.getItem("token"));
      dispatch(
        removeProduct({ _id: item._id, price: item.price, token: token })
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Image src={item.urlImg} alt="" width={100} height={100} />
        <div className={styles.information}>
          {" "}
          <p className={styles.title}>{item.title}</p>
          <div className={styles.counter}>
            <button onClick={() => changeCountHandler("decrement")}>-</button>
            <p>{item.count || 1}</p>
            <button onClick={() => changeCountHandler("increment")}>+</button>
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <RiDeleteBinLine
          size={22}
          className={styles.delete}
          onClick={removeItem}
        />
        <p className={styles.price}>{item.price} ₽</p>
      </div>
    </div>
  );
};

export default Item;
