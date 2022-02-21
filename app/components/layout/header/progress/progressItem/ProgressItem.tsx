import { useRouter } from "next/router";
import React, { FC } from "react";

import styles from "./ProgressItem.module.scss";

type Item = {
  id: string;
  title: string;
  number: number;
  pathname: string;
};

interface IProgressItemProps {
  item: Item;
}

const ProgressItem: FC<IProgressItemProps> = ({ item }) => {
  const router = useRouter();

  const progress = router.pathname;

  return (
    <div
      className={progress === item.pathname ? styles.active : styles.default}
    >
      <div className={styles.circle}>
        <p>{item.number}</p>
      </div>
      <h1 className={styles.title}>{item.title}</h1>
    </div>
  );
};

export default ProgressItem;
