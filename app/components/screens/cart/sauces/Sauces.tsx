import Image from "next/image";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { addProduct } from "../../../../store/cart/cart.actions";

import Heading from "../../../UI/heading/Heading";

import styles from "./Sauces.module.scss";

const Sauces: FC = () => {
  const { products } = useTypedSelector((state) => state.product);

  const dispatch = useDispatch();

  const filteredProducts = products.filter(
    (product) => product.type === "sauce"
  );

  const addToCart = (product: any) => {
    if (typeof window !== "undefined") {
      const token = String(localStorage.getItem("token"));
      dispatch(addProduct({ product, token }));
    }
  };

  return (
    <div className={styles.container}>
      <Heading size="small" margin="40px 0px">
        Соусы к бортикам и закускам
      </Heading>
      <div className={styles.products}>
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className={styles.product}
            onClick={() => addToCart(product)}
          >
            <Image src={product.urlImg} alt="" width={150} height={150} />
            <p>{product.title}</p>
            <p className={styles.price}>от {product.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sauces;
