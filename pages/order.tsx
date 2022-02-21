import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Order from "../app/components/screens/order/Order";

const order: NextPage = () => {
  return (
    <>
      <Head>
        <title>Заказ</title>
        <meta name="description" content="Ваш заказ" />
      </Head>
      <Order />
    </>
  );
};

export default order;
