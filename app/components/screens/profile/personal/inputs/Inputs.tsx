import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { updateUserHandler } from "../../../../../store/user/user.actions";
import { validationProfile } from "../../validationProfile";

import Button from "../../../../UI/button/Button";
import Input from "../../../../UI/input/Input";

import styles from "./Inputs.module.scss";

const Inputs: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  const { setErrorProfile } = useActions();

  const dispatch = useDispatch();

  const { register, setValue, handleSubmit } = useForm<any>();

  const onSubmit = handleSubmit((data) =>
    setTimeout(() => {
      if (!validationProfile(data, user)) {
        const token = String(localStorage.getItem("token"));
        dispatch(updateUserHandler({ form: data, token }));
        console.log(data);
      } else {
        setErrorProfile(validationProfile(data, user));
      }
    }, 1000)
  );

  const inputs = [
    {
      id: 1,
      value: user?.name,
      name: "Имя",
      title: "name",
    },
    {
      id: 2,
      value: user?.number,
      name: "Номер телефона",
      title: "number",
    },
    { id: 3, value: "*************", name: "Пароль", title: "password" },
    {
      id: 4,
      value: user?.address,
      name: "Адрес доставки",
      title: "address",
    },
  ];

  return (
    <div className={styles.container}>
      {inputs.map(({ id, name, title, value }) => (
        <Input
          type="column"
          {...register(title)}
          key={id}
          name={name}
          value={value}
          title={title}
          setValue={setValue}
        />
      ))}
      <Button
        br={8}
        w={140}
        h={40}
        margin="20px 0px 30px 0px"
        onClick={onSubmit}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default Inputs;
