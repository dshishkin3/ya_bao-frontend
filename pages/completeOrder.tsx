import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import CompleteOrder from "../app/components/screens/completeOrder/CompleteOrder";

const completeOrder: NextPage = () => {
  return (
    <>
      <Head>
        <title>Заказ принят</title>
        <meta name="description" content="Заказ принят" />
      </Head>
      <CompleteOrder />
    </>
  );
};

export default completeOrder;
