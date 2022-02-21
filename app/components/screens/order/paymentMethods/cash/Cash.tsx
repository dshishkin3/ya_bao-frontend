import { Radio } from "@chakra-ui/react";
import React, { FC } from "react";

import styles from "./Cash.module.scss";

interface ICashProps {
  setValue: (arg0: "surrenderOfMoney", arg1: string) => void;
}

const Cash: FC<ICashProps> = ({ setValue }) => {
  return (
    <div className={styles.cash}>
      <p>С какой суммы подготовить сдачу?</p>
      <input
        onChange={(e) => setValue("surrenderOfMoney", e.target.value)}
        placeholder=""
      />
      <p>₽</p>
      <Radio value="3" colorScheme={"red"} borderRadius={5} marginLeft={35}>
        <p> Без сдачи</p>
      </Radio>
    </div>
  );
};

export default Cash;
