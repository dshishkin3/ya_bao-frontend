import React, { FC, useState } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import HeaderAuth from "./headerAuth/Header";
import Form from "./form/Form";

import styles from "./Auth.module.scss";

interface IAuthProps {
  setIsOpen?: (arg0: boolean) => void;
}

const Auth: FC<IAuthProps> = ({ setIsOpen }) => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);
  const [tabView, setTabView] = useState<string>("Вход");

  const handleClose = () => setIsOpenAuth(!isOpenAuth);

  const openPopup = () => {
    setIsOpenAuth(true);
  };

  return (
    <>
      <button className={styles.auth} onClick={openPopup}>
        <ExternalLinkIcon /> <p>Войти</p>
      </button>

      <Modal isOpen={isOpenAuth} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent className={styles.container}>
          <HeaderAuth tabView={tabView} setTabView={setTabView} />

          <Form tabView={tabView} setIsOpen={setIsOpen} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Auth;
