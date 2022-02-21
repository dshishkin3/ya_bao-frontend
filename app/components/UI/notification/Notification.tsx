import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useToast } from "@chakra-ui/react";

const Notification: FC = () => {
  const { message } = useTypedSelector((state) => state.cart);
  const { messageUser, error } = useTypedSelector((state) => state.user);
  const { errorOrder } = useTypedSelector((state) => state.order);

  const {
    closeNotificationPopup,
    closeNotificationUserPopup,
    closeOrderPopup,
  } = useActions();

  const toast = useToast();

  // success notifications

  useEffect(() => {
    if (message !== null || messageUser !== null) {
      toast({
        title: message || messageUser,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
        onCloseComplete: () => {
          closeNotificationUserPopup();
          closeNotificationPopup();
        },
      });
    }
  }, [message, messageUser]);

  // error notifications

  useEffect(() => {
    if (error || errorOrder) {
      toast({
        title: error || errorOrder,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
        onCloseComplete: () => {
          closeNotificationUserPopup();
          closeOrderPopup();
        },
      });
    }
  }, [error, errorOrder]);

  return <></>;
};

export default Notification;
