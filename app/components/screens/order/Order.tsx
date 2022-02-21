import React, { FC, useEffect } from "react";
import Heading from "../../UI/heading/Heading";
import PromoButton from "../../UI/promoButton/PromoButton";
import { useForm } from "react-hook-form";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { addOrder } from "../../../store/order/order.actions";
import { useRouter } from "next/router";
import { validationOrder } from "./validationOrder";
import { FormData } from "./Order.types";

import Inputs from "./inputs/Inputs";
import PaymentMethods from "./paymentMethods/PaymentMethods";
import End from "./end/End";
import OrderList from "./orderList/OrderList";

import styles from "./Order.module.scss";
import { useActions } from "../../../hooks/useActions";

const Order: FC = () => {
  const { register, setValue, handleSubmit } = useForm<FormData>();

  const { products, amountCart } = useTypedSelector((state) => state.cart);
  const { user } = useTypedSelector((state) => state.user);

  const { addErrorOrder } = useActions();

  const router = useRouter();

  const dispatch = useDispatch();

  // need fix
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const onSubmit = handleSubmit((data) =>
    setTimeout(() => {
      if (!validationOrder(data, user)) {
        const token = String(localStorage.getItem("token"));

        dispatch(
          addOrder({
            info: {
              name: user?.name || data.name,
              number: user?.number || data.number,
              address: user?.address || data.address,
              timeToDelivery: data.timeToDelivery,
              paymentMethod: data.paymentMethod,
            },
            products,
            amount: amountCart,
            token,
          })
        );
        router.push("/completeOrder");
      } else {
        addErrorOrder(validationOrder(data, user));
      }
    }, 1000)
  );

  return (
    <div className={styles.container}>
      <div>
        <Heading size="big">Заказ на доставку</Heading>
        <Inputs register={register} setValue={setValue} />
        <Heading size="small">Промокод</Heading>
        <PromoButton margin="30px 0px 0px 0px">Введите промокод</PromoButton>
        <PaymentMethods register={register} setValue={setValue} />
        <End onSubmit={onSubmit} />
      </div>
      <div>
        <OrderList />
      </div>
    </div>
  );
};

export default Order;
