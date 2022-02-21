import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addOrder } from "./order.actions";
import { IOrderState } from "./order.types";

const initialState: IOrderState = {} as IOrderState;

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    // popups
    addErrorOrder: (state, action: PayloadAction<any>) => {
      state.errorOrder = action.payload;
    },
    closeOrderPopup: (state) => {
      state.errorOrder = null;
    },
  },

  // оформление заказа
  extraReducers: (builder) => {
    builder.addCase(addOrder.pending, (state) => {
      state.errorOrder = null;
    }),
      builder.addCase(addOrder.fulfilled, (state) => {
        state.message = "Ваш заказ передан службе доставки! Ожидайте";
      }),
      builder.addCase(addOrder.rejected, (state) => {
        state.errorOrder = "Заполните все поля заказа и повторите ещё раз";
      });
  },
});

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;

export const { addErrorOrder, closeOrderPopup } = orderSlice.actions;
