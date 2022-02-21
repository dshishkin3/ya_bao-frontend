import React, { FC } from "react";
import Image from "next/image";

import logo from "/public/home/footer/logoFooter.svg";
import imageFooter from "/public/home/footer/imageFooter.svg";
import viber from "/public/home/footer/viber.svg";
import skype from "/public/home/footer/skype.svg";
import imessage from "/public/home/footer/imessage.svg";
import telegram from "/public/home/footer/telegram.svg";

import Button from "../../UI/button/Button";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
          <div className={styles.logoText}>
            <p>YA BAO</p>
            <p>дух китайской еды</p>
          </div>
        </div>
        <p className={styles.title}>Калорийность и состав</p>
        <p className={styles.title}>Правовая информация</p>

        <div className={styles.society}>
          <p className={styles.titleSociety}>Мы в соцсетях</p>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://vk.com">Вконтакте</a>
        </div>
        <p className={styles.rights}>YaBao Все праав защищены © 2021</p>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.header}>
          <p className={styles.title}>
            Остались вопросы? А мы всегда на связи:
          </p>
          <div className={styles.cards}>
            {cards.map(({ id, urlImg, url }) => (
              <div className={styles.card} key={id}>
                <a href={url}>
                  <Image src={urlImg} alt="" width={40} height={40} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.feedback}>
            <a href="tel:88003333662" className={styles.number}>
              8 800 333-36-62
            </a>
            <Button w={180} h={42} br={28} notActive>
              Заказать звонок
            </Button>
          </div>
          <Image src={imageFooter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const cards = [
  { id: 1, urlImg: viber, url: "https://www.viber.com/ru/" },
  { id: 2, urlImg: skype, url: "https://www.skype.com/ru/" },
  { id: 3, urlImg: imessage, url: "support.apple.com/ru-ru/explore/messages" },
  { id: 4, urlImg: telegram, url: "https://web.telegram.org/" },
];
