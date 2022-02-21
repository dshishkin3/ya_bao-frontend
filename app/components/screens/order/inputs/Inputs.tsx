import React, { FC, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IInputsProps } from "../Order.types";

import styles from "./Inputs.module.scss";
import Input from "../../../UI/input/Input";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const Inputs: FC<IInputsProps> = ({ register, setValue }) => {
  const [time, setTime] = useState<null | string>(null);

  const { user } = useTypedSelector((state) => state.user);

  const setTimeHandler = (name: string) => {
    setValue("timeToDelivery", name);
    setTime(name);
  };

  const inputs = [
    { id: 1, name: "Имя", title: "name", value: user?.name },
    {
      id: 2,
      name: "Номер телефона",
      title: "number",
      value: user?.number,
    },
    {
      id: 3,
      name: "Адрес доставки",
      title: "address",
      value: user?.address,
    },
  ];

  const timeToDelivery = [
    { id: 1, name: "Побыстрее" },
    { id: 2, name: "Утро (9:00 - 12:00)" },
    { id: 3, name: "День (12:00 - 15:00)" },
    { id: 4, name: "День (15:00 - 18:00)" },
    { id: 5, name: "Вечер (18:00 - 21:00)" },
  ];

  return (
    <div className={styles.inputs}>
      {inputs.map(({ id, name, title, value }) => (
        <>
          <Input
            key={id}
            {...register(title)}
            name={name}
            value={value}
            title={title}
            setValue={setValue}
          />
        </>
      ))}

      <div className={styles.dropDown}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {time ? time : "Время доставки"}
          </MenuButton>
          <MenuList {...register("timeToDelivery")}>
            {timeToDelivery.map(({ id, name }) => (
              <MenuItem key={id} onClick={() => setTimeHandler(name)}>
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Inputs;
