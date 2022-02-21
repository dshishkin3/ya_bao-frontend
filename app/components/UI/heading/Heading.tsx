import React, { ReactNode } from "react";

import styles from "./Heading.module.scss";

export interface IHeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size: "small" | "big";
  margin?: string;
}

const Heading = ({ children, size, margin }: IHeadingProps): JSX.Element => {
  return (
    <h1
      className={size === "small" ? styles.small : styles.big}
      style={{ margin: margin }}
    >
      {children}
    </h1>
  );
};

export default Heading;
