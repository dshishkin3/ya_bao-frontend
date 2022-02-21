import { CloseIcon, PhoneIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  ModalBody,
  Button as ButtonUI,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Checkbox,
  FormErrorMessage,
  FormControl,
  ModalFooter,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { IError } from "../Form";

interface IPasswordProps {
  password: string;
  setPassword: (arg0: string) => void;
  isError: IError;
}

const Password: FC<IPasswordProps> = ({ password, setPassword, isError }) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const handlePassChange = (e: any) => setPassword(e.target.value);

  return (
    <FormControl isInvalid={isError.password}>
      <InputGroup marginBottom={5} flexDirection="column" alignItems={"center"}>
        <InputLeftElement pointerEvents="none" marginTop={"6px"}>
          <UnlockIcon color="gray.300" />
        </InputLeftElement>
        <Input
          focusBorderColor="#cccccc"
          pr="4.5rem"
          type={showPass ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={handlePassChange}
          padding={"25px 45px"}
          maxLength={20}
        />

        <InputRightElement width="4.5rem">
          <ButtonUI
            h="2rem"
            marginTop={3}
            size="sm"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "Hide" : "Show"}
          </ButtonUI>
        </InputRightElement>
        {isError.password && (
          <FormErrorMessage>
            Пароль должен быть от 6 до 20 символов
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default Password;
