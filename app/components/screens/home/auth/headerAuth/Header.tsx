import { ModalHeader } from "@chakra-ui/react";
import React, { FC } from "react";

import styles from "../Auth.module.scss";

interface IHeaderAuthProps {
  tabView: string;
  setTabView: (arg0: string) => void;
}

const HeaderAuth: FC<IHeaderAuthProps> = ({ tabView, setTabView }) => {
  return (
    <ModalHeader padding={0}>
      <div className={styles.choice}>
        <div
          onClick={() => setTabView("Вход")}
          className={tabView === "Вход" ? styles.tabActive : styles.tab}
        >
          Вход
        </div>
        <div
          onClick={() => setTabView("Регистрация")}
          className={tabView === "Регистрация" ? styles.tabActive : styles.tab}
        >
          Регистрация
        </div>
      </div>
    </ModalHeader>
  );
};

export default HeaderAuth;
