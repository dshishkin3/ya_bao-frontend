// бургер меню

import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useActions } from "../../../../hooks/useActions";
import Link from "next/link";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import Cart from "../../../screens/home/cart/Cart";
import Auth from "../../../screens/home/auth/Auth";

import styles from "./Drawer.module.scss";

const DrawerBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useTypedSelector((state) => state.user);

  const { openCartPopup, closeCartPopup } = useActions();

  const openPopup = () => {
    setIsOpen(true);
    openCartPopup();
  };

  const closePopup = () => {
    setIsOpen(false);
    closeCartPopup();
  };

  return (
    <>
      <HamburgerIcon w={8} h={8} onClick={openPopup} />
      <Drawer
        placement={"right"}
        onClose={closePopup}
        isOpen={isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent style={{ width: "90%", overflow: "auto" }}>
          <DrawerHeader borderBottomWidth="1px">
            <div className={styles.headerWrapper}>
              <p>Добрый день, {user?.name || "Гость"} !</p>
              <CloseIcon onClick={closePopup} />
            </div>
            {user && (
              <Link href={"/profile"}>
                <a>
                  <p className={styles.profile}>Мой профиль</p>
                </a>
              </Link>
            )}
          </DrawerHeader>
          <DrawerBody>
            <div className={styles.delivery}>
              <p className={styles.deliveryTitle}>
                Доставка <span className={styles.city}>Москва</span>
              </p>
              <div className={styles.timeToDelivery}>
                <p>Время доставки</p> <div className={styles.point}></div> от 31
                мин
              </div>
            </div>
            {user ? <Cart /> : <Auth setIsOpen={setIsOpen} />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerBlock;
