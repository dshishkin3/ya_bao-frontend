import { Checkbox } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useActions } from "../../../../hooks/useActions";

import Heading from "../../../UI/heading/Heading";
import Inputs from "./inputs/Inputs";

import styles from "./Personal.module.scss";

const Personal: FC = () => {
  const router = useRouter();
  const { logout } = useActions();

  const logoutUser = () => {
    router.push("/");
    logout();
    localStorage.removeItem("token");
  };

  return (
    <div>
      <Heading size="big">Личные данные</Heading>
      <Inputs />
      <Heading size="small">Подписки</Heading>
      <Checkbox colorScheme="red" className={styles.checkbox} defaultIsChecked>
        <p>Сообщать о бонусах, акциях и новых продуктах</p>
      </Checkbox>
      <button className={styles.exit} onClick={logoutUser}>
        Выйти
      </button>
    </div>
  );
};

export default Personal;
