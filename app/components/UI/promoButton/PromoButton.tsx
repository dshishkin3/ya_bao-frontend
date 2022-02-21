import React from "react";

import Button from "../button/Button";

import styles from "./PromoButton.module.scss";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  margin?: string;
}

const PromoButton = ({ margin }: IButtonProps): JSX.Element => {
  return (
    <div className={styles.container} style={{ margin: margin }}>
      <input placeholder="Введите промокод" />
      <Button h={46} w={113} br={0}>
        Применить
      </Button>
    </div>
  );
};

export default PromoButton;
