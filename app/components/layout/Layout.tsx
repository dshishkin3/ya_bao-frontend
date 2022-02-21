import React, { FC, ReactNode } from "react";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Notification from "../UI/notification/Notification";

import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Notification />
      <Footer />
    </div>
  );
};

export default Layout;
