import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Orders from "./orders/Orders";

import Personal from "./personal/Personal";

import styles from "./Profile.module.scss";

const Profile: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  const router = useRouter();

  // need fix
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Personal />
      <Orders />
    </div>
  );
};

export default Profile;
