import { IProduct } from "./../../components/shared/interfaces/product.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from "./order.types";

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (
    {
      info,
      products,
      token,
      amount,
    }: { info: Order; products: IProduct[]; amount: number; token: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/order`,
        {
          info: info,
          products: products,
          amount: amount,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return {
        type: "MY_TEST_ACTION",
      };
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
