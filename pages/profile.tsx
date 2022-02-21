import Head from "next/head";
import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Profile from "../app/components/screens/profile/Profile";

const profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Профиль</title>
        <meta name="description" content="Профиль" />
      </Head>
      <Profile />
    </>
  );
};

export default profile;
