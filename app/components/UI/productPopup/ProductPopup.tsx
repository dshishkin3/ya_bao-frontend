import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Image from "next/image";
import { useActions } from "../../../hooks/useActions";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/cart/cart.actions";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import Selectors from "./selectors/Selectors";
import Extensions from "./extensions/Extensions";
import Button from "../../UI/button/Button";

import styles from "./ProductPopup.module.scss";

const ProductPopup: FC = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { currentProduct } = useTypedSelector((state) => state.cart);
  const { isProductPopup } = useTypedSelector((state) => state.product);

  const { closeProductPopup } = useActions();

  const dispatch = useDispatch();

  const addToCart = () => {
    if (typeof window !== "undefined") {
      const token = String(localStorage.getItem("token"));
      dispatch(addProduct({ product: currentProduct, token }));
    }
    closeProductPopup();
    // document.body.style.overflow = "scroll";
    console.log("close popup");
  };

  const closePopup = () => {
    closeProductPopup();
    console.log("close popup");
    // document.body.style.overflow = "scroll";
  };

  // if (isProductPopup) document.body.style.overflow = "hidden";

  return (
    <>
      <Modal
        isOpen={isProductPopup}
        onClose={() => closeProductPopup()}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent className={styles.modalContent}>
          <ModalCloseButton />
          <ModalBody>
            <div className={styles.content}>
              <div className={styles.wrapper}>
                <div className={styles.image}>
                  <Image
                    width={315}
                    height={315}
                    src={currentProduct.urlImg}
                    alt=""
                  />
                </div>

                <div className={styles.info}>
                  <div className={styles.text}>
                    <p className={styles.title}>{currentProduct.title}</p>
                    <p className={styles.information}>
                      {currentProduct?.size || " Маленькая "},
                      {currentProduct?.category || " Традиционное"} тесто
                    </p>
                    <p className={styles.subtitle}>{currentProduct.subtitle}</p>
                    {currentProduct?.type === "pizza" && <Selectors />}
                    {currentProduct?.type === "pizza" && <Extensions />}
                  </div>

                  <div
                    className={styles.footer}
                    style={{ opacity: user ? "1" : "0.3" }}
                  >
                    <Button h={59} br={8} onClick={user ? addToCart : () => {}}>
                      {!user ? (
                        <p className={styles.helpOrder}>
                          Чтобы добавить товар в коризну - авторизуйтесь :)
                        </p>
                      ) : (
                        <span>Добавить в корзину {currentProduct.price} ₽</span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* {isProductPopup && (
        <div className={styles.container}>
          <div className={styles.overlay} onClick={closePopup} />
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <CloseIcon className={styles.close} onClick={closePopup} />

              <div className={styles.image}>
                <Image
                  width={315}
                  height={315}
                  src={currentProduct.urlImg}
                  alt=""
                />
              </div>

              <div className={styles.info}>
                <div className={styles.text}>
                  <p className={styles.title}>{currentProduct.title}</p>
                  <p className={styles.information}>
                    {currentProduct?.size || " Маленькая "},
                    {currentProduct?.category || " Традиционное"} тесто
                  </p>
                  <p className={styles.subtitle}>{currentProduct.subtitle}</p>
                  {currentProduct?.type === "pizza" && <Selectors />}
                  {currentProduct?.type === "pizza" && <Extensions />}
                </div>

                <div
                  className={styles.footer}
                  style={{ opacity: user ? "1" : "0.3" }}
                >
                  <Button h={59} br={8} onClick={user ? addToCart : () => {}}>
                    {!user ? (
                      <p className={styles.helpOrder}>
                        Чтобы добавить товар в коризну - авторизуйтесь :)
                      </p>
                    ) : (
                      <span>Добавить в корзину {currentProduct.price} ₽</span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ProductPopup;
