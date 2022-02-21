import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React, { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import Button from "../../../UI/button/Button";
import Heading from "../../../UI/heading/Heading";
import PromoButton from "../../../UI/promoButton/PromoButton";

import styles from "./Final.module.scss";

const Final: FC = () => {
  const { amountCart } = useTypedSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <Heading size="small" margin="40px 0px">
        Промокод
      </Heading>
      <div className={styles.counting}>
        <PromoButton>Введите промокод</PromoButton>
        <div className={styles.sum}>
          <p className={styles.text}>Сумма заказа: </p>
          <p className={styles.price}>{amountCart} ₽</p>
        </div>
      </div>
      <div className={styles.links}>
        <Link href={"/"} passHref>
          <a>
            <div className={styles.back}>
              <ChevronLeftIcon width={6} height={6} color={"#231f20"} />
              <p>Вернуться в магазин</p>
            </div>
          </a>
        </Link>
        <Link href={"/order"} passHref>
          <a>
            <Button h={55} br={8} w={225}>
              Оформить заказ
              <ChevronRightIcon width={5} height={5} marginTop={0.5} />
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Final;
