import { ModalBody, Checkbox, ModalFooter } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginHandler,
  registerHandler,
} from "../../../../../store/user/user.actions";

import Button from "../../../../UI/button/Button";
import Number from "./number/Number";
import Password from "./password/Password";

interface IFormProps {
  tabView: string;
  setIsOpen?: (arg0: boolean) => void;
}

export interface IError {
  number: boolean;
  password: boolean;
}

const Form: FC<IFormProps> = ({ tabView, setIsOpen }) => {
  const [number, setNumber] = useState("+7");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState<IError>({
    number: false,
    password: false,
  });

  const dispatch = useDispatch();

  const auth = () => {
    setIsError({
      number: number.length < 12,
      password: password.length < 6,
    });

    if (isError.number === false && isError.password === false) {
      if (tabView === "Вход") {
        dispatch(loginHandler({ number, password }));
      } else {
        dispatch(registerHandler({ number, password }));
      }
      if (setIsOpen) setIsOpen(false);
    }
  };

  return (
    <>
      <ModalBody>
        <Number number={number} setNumber={setNumber} isError={isError} />
        <Password
          password={password}
          setPassword={setPassword}
          isError={isError}
        />

        {tabView === "Регистрация" && (
          <>
            <Checkbox
              marginTop={5}
              size="lg"
              colorScheme="red"
              defaultIsChecked
              marginBottom={3}
            >
              Хочу получать SMS оповещения
            </Checkbox>

            <p>
              Нажимая кнопку &quot;Зарегистрироваться&quot;, вы принимаете{" "}
              <a>Пользовательское соглашение</a>
            </p>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        <Button br={15} h={50} onClick={auth}>
          {tabView === "Вход" ? "Войти" : "Регистрация"}
        </Button>
      </ModalFooter>
    </>
  );
};

export default Form;
