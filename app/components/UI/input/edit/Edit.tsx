import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import React, { FC } from "react";

const EditableControls: FC = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm" marginLeft={"-85px"}>
      <IconButton
        aria-label=""
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label=""
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center" marginLeft={"-60px"}>
      <IconButton
        aria-label=""
        size="sm"
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    </Flex>
  );
};

export default EditableControls;
