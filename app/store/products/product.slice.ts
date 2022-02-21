import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../../components/shared/interfaces/product.interface";
import { IProductState } from "./product.types";

const initialState: IProductState = {
  products: [],
  category: "Все",
  isProductPopup: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    // получение продуктов
    productsLoader: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },

    // выбрать категорию товара
    selectCategory: (state, action: PayloadAction<{ category: string }>) => {
      state.category = action.payload.category;
    },

    // popups
    openProductPopup: (state) => {
      state.isProductPopup = true;
    },
    closeProductPopup: (state) => {
      state.isProductPopup = false;
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
