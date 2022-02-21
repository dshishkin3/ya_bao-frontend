import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Cart from "../app/components/screens/cart/Cart";

const cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Корзина</title>
        <meta name="description" content="Ваша корзина" />
      </Head>
      <Cart />
    </>
  );
};

export default cart;
