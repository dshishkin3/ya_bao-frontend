import React, { ReactNode } from "react";

import styles from "./Button.module.scss";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  onClick?: () => void;
  notActive?: boolean;
  h: number;
  w?: number;
  br: number;
  fontSize?: number;
  margin?: string;
}

const Button = ({
  children,
  onClick,
  notActive,
  h,
  w,
  br,
  fontSize,
  margin,
}: IButtonProps): JSX.Element => {
  return (
    <button
      style={{
        height: h,
        width: w,
        borderRadius: br,
        fontSize: fontSize,
        margin: margin,
      }}
      className={!notActive ? styles.active : styles.container}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
