import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCart } from "./cart.actions";
import { ICartState } from "./cart.types";
import {
  ICart,
  IExtension,
} from "../../components/shared/interfaces/product.interface";

const initialState: ICartState = {
  products: [],
  currentProduct: {} as ICart,
  amountCart: 0,
  isLoading: false,
  error: null,
  message: null,
  isCartPopup: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // добавить в корзину
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.products.push(action.payload);
      state.amountCart += action.payload.price;
      state.message = "Товар добавлен в корзину!";
    },

    // удалить из корзины
    removeFromCart: (
      state,
      action: PayloadAction<{ _id: string; price: number }>
    ) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.amountCart -= action.payload.price;
    },

    // выбрать текущий продукт
    setCurrentProduct: (state, action: PayloadAction<ICart>) => {
      state.currentProduct = action.payload;
    },

    // добавление доп. товара
    addExtension: (state, action: PayloadAction<IExtension>) => {
      if (state.currentProduct.extension) {
        state.currentProduct.price -= state.currentProduct.extension.price;
      }
      state.currentProduct.extension = action.payload;
      state.currentProduct.price += action.payload.price;
    },

    // изменение размера продукта
    changeSizeCurrProduct: (state, action: PayloadAction<{ size: string }>) => {
      state.currentProduct.size = action.payload.size;
      switch (action.payload.size) {
        case "Маленькая":
          state.currentProduct.price = state.currentProduct.defaultPrice;
          break;

        case "Средняя":
          state.currentProduct.price = Math.floor(
            state.currentProduct.defaultPrice * 1.25
          );
          break;

        case "Большая":
          state.currentProduct.price = Math.floor(
            state.currentProduct.defaultPrice * 1.5
          );
          break;
      }
    },

    // изменение категории продукта
    changeCategoryCurrProduct: (
      state,
      action: PayloadAction<{ category: string }>
    ) => {
      state.currentProduct.category = action.payload.category;
    },

    // изменение кол-ва товаров
    addCountItem: (state, action: PayloadAction<{ _id: string }>) => {
      const product = state.products.filter(
        (product) => product._id === action.payload._id
      );
      product[0].count = product[0].count + 1;
      state.amountCart += product[0].price;
    },
    removeCountItem: (state, action) => {
      const product = state.products.filter(
        (product) => product._id === action.payload._id
      );
      product[0].count = product[0].count - 1;
      state.amountCart -= product[0].price;
    },

    // popups
    openCartPopup: (state) => {
      state.isCartPopup = true;
    },
    closeCartPopup: (state) => {
      state.isCartPopup = false;
    },
    closeNotificationPopup: (state) => {
      state.message = null;
    },
  },

  // получение корзины
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(
        fetchCart.fulfilled,
        (
          state,
          action: PayloadAction<{ products: ICart[]; amountCart: number }>
        ) => {
          state.isLoading = false;
          state.products = action.payload.products;
          state.amountCart = action.payload.amountCart;
        }
      ),
      builder.addCase(
        fetchCart.rejected,
        (state, action: PayloadAction<any>) => {
          state.products = [];
          state.isLoading = false;
          state.error = action.payload.error;
        }
      );
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const { addToCart, removeFromCart, addCountItem, removeCountItem } =
  cartSlice.actions;
