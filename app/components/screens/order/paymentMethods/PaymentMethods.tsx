import {
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import Image from "next/image";
import { IPaymentProps } from "../Order.types";

import Heading from "../../../UI/heading/Heading";
import CreditCard from "./creditCard/CreditCard";
import Cash from "./cash/Cash";

import card from "/public/order/card.svg";

import styles from "./PaymentMethods.module.scss";

const PaymentMethods: FC<IPaymentProps> = ({ register, setValue }) => {
  return (
    <div className={styles.container} {...register("paymentMethod")}>
      <Heading size="small">Способы оплаты</Heading>
      <Tabs variant={"unstyled"}>
        <TabList>
          <RadioGroup>
            <Stack direction="column" className={styles.stack}>
              <Tab _selected={{ boxShadow: "none" }} padding={0}>
                <Radio
                  value="1"
                  colorScheme={"red"}
                  onChange={() => setValue("paymentMethod", "Картой на сайте")}
                >
                  <Flex alignItems={"center"}>
                    <Image src={card} alt="" />
                    <p className={styles.cardP}>Картой на сайте</p>
                  </Flex>
                </Radio>
              </Tab>
              <Tab _selected={{ boxShadow: "none" }} padding={0}>
                <Radio
                  value="2"
                  colorScheme={"red"}
                  onChange={() => setValue("paymentMethod", "Наличными")}
                >
                  <p> Наличными</p>
                </Radio>
              </Tab>
            </Stack>
          </RadioGroup>
        </TabList>

        <TabPanels marginTop={3}>
          <TabPanel padding={0}>
            <CreditCard />
          </TabPanel>
          <TabPanel padding={0}>
            <Cash setValue={setValue} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PaymentMethods;
