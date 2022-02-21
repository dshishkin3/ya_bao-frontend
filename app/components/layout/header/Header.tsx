import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";

import DrawerBlock from "./burger/Drawer";
import logo from "../../../../public/Logo.svg";
import Information from "./information/Information";
import Progress from "./progress/Progress";

const Header: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <a>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt=""
              width={64}
              height={64}
              className={styles.logoImg}
            />
            <div className={styles.companyName}>
              <p className={styles.nameBold}>YA BAO</p>
              <p>дух китайской еды</p>
            </div>
          </div>
        </a>
      </Link>
      {router.pathname === "/" && <Information />}
      {router.pathname === "/profile" && <Information />}
      {router.pathname === "/cart" && <Progress />}
      {router.pathname === "/order" && <Progress />}
      {router.pathname === "/" && (
        <div className={styles.mobile}>
          <DrawerBlock />
        </div>
      )}
    </header>
  );
};

export default Header;
