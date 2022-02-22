import { ChevronUpIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./BackTop.module.scss";

const BackTop: FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const router = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CSSTransition
      in={scrollPosition > 500}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <div className={styles.container}>
        <Link href={router.pathname} passHref>
          <div className={styles.icon}>
            <ChevronUpIcon width={30} height={30} color="#fff" />
          </div>
        </Link>
      </div>
    </CSSTransition>
  );
};

export default BackTop;
