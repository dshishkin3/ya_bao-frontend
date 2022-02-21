import React, { FC } from "react";
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

import styles from "./Input.module.scss";
import EditableControls from "./edit/Edit";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue: any;
  title: string;
  name: string;
  value?: string;
  type?: "column" | "row";
}

const Input: FC<IInputProps> = ({
  setValue,
  title,
  name,
  type = "row",
  value,
}) => {
  return (
    <>
      <Editable
        textAlign="center"
        defaultValue={value ? value : name}
        fontSize="2xl"
        isPreviewFocusable={false}
        className={styles.container}
        alignItems={type === "column" ? "flex-start" : ""}
        flexDirection={type === "column" ? "column" : "row"}
      >
        <p className={styles.name}>{name}</p>
        <div className={styles.wrapper}>
          <EditablePreview className={styles.input} />

          <EditableInput
            onChange={(e) => setValue(title, e.target.value)}
            width={538}
          />
          <EditableControls />
        </div>
      </Editable>
    </>
  );
};

export default Input;
