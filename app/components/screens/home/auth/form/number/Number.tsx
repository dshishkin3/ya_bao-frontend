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
import React, { FC } from "react";
import { IError } from "../Form";

interface INumberProps {
  number: string;
  setNumber: (arg0: string) => void;
  isError: IError;
}

const Number: FC<INumberProps> = ({ number, setNumber, isError }) => {
  const handleNumberChange = (e: any) => setNumber(e.target.value);

  return (
    <FormControl isInvalid={isError.number}>
      <InputGroup marginBottom={5} flexDirection="column" alignItems={"center"}>
        <InputLeftElement pointerEvents="none" marginTop={"6px"}>
          <PhoneIcon color="gray.300" />
        </InputLeftElement>

        <Input
          focusBorderColor="#cccccc"
          value={number}
          type="tel"
          fontSize={18}
          placeholder="Phone number"
          onChange={handleNumberChange}
          padding={"25px 45px"}
          maxLength={12}
        />
        <InputRightElement alignItems={"center"} height="3.2rem" width="3.4rem">
          <ButtonUI
            height="30px"
            borderRadius={"50%"}
            onClick={() => setNumber("+7 ")}
          >
            <CloseIcon width={3} height={3} />
          </ButtonUI>
        </InputRightElement>
        {isError.number && (
          <FormErrorMessage>
            Длина телефона должна быть 11 символов
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default Number;
