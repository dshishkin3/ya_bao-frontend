import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart/cart.slice";
import { orderActions } from "../store/order/order.slice";
import { productActions } from "../store/products/product.slice";
import { userActions } from "../store/user/user.slice";

const allActions = {
  ...productActions,
  ...cartActions,
  ...userActions,
  ...orderActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
