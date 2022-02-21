import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import Heading from "../app/components/UI/heading/Heading";

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Flex textAlign="center" flexDirection="column" margin="150px 0px ">
      <Heading size="big">404 - страница не найдена</Heading>
      <p>что то пошло не так...</p>
    </Flex>
  );
};

export default Error;
