import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./products/product.slice";
import { cartReducer } from "./cart/cart.slice";
import { userReducer } from "./user/user.slice";
import { orderReducer } from "./order/order.slice";

export const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});
