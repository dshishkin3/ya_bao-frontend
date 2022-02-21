import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ICart } from "../../components/shared/interfaces/product.interface";
import {
  addCountItem,
  addToCart,
  removeCountItem,
  removeFromCart,
} from "./cart.slice";

export const fetchCart = createAsyncThunk(
  "cart/getCart",
  async function (token: string, { rejectWithValue }) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/cart`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (
    { product, token }: { product: ICart; token: string },
    { rejectWithValue, dispatch }
  ) => {
    console.log(product);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/cart`,
        {
          _id: product._id,
          title: product.title,
          subtitle: product.subtitle,
          urlImg: product.urlImg,
          count: 1,
          price: product.price,
          category: product.category || "Традиционное",
          size: product.size || "Маленькая",
          extension: product.extension,
          type: product.type,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch(addToCart(product));
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "cart/removeProduct",
  async (
    { _id, price, token }: { _id: string; price: number; token: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API}/cart`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          _id,
        },
      });
      dispatch(removeFromCart({ _id: _id, price: price }));
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const changeCount = createAsyncThunk(
  "cart/changeCount",
  async (
    {
      _id,
      operation,
      token,
    }: { _id: string; operation: string; token: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/cart`,
        {
          _id,
          operation,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (operation === "increment") {
        dispatch(addCountItem({ _id }));
      } else {
        dispatch(removeCountItem({ _id }));
      }
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
