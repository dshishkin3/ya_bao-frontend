import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React, { FC } from "react";

import Button from "../../../UI/button/Button";

import styles from "./End.module.scss";

interface IEndProps {
  onSubmit: () => void;
}

const End: FC<IEndProps> = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <Link href={"/cart"} passHref>
        <a>
          <div className={styles.back}>
            <ChevronLeftIcon width={6} height={6} color={"#231f20"} />
            <p>Вернуться в корзину</p>
          </div>
        </a>
      </Link>
      <Button br={8} h={60} w={300} onClick={onSubmit}>
        Оформить заказ
      </Button>
    </div>
  );
};

export default End;
