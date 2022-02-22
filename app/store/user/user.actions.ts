import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  login,
  loginError,
  register,
  registerError,
  updateUser,
} from "./user.slice";

export const fetchUser = createAsyncThunk(
  "user/auth",
  async function (token: string, { rejectWithValue }) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/auth`, {
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

export const loginHandler = createAsyncThunk(
  "user/login",
  async (
    { number, password }: { number: string; password: string },
    { dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth` + "/login",
        {
          number,
          password,
        }
      );
      dispatch(login(res.data.user));
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error: any) {
      console.log(error);
      dispatch(loginError(error));
    }
  }
);

export const registerHandler = createAsyncThunk(
  "user/register",
  async (
    { number, password }: { number: string; password: string },
    { dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth` + "/register",
        {
          number,
          password,
        }
      );
      dispatch(register(res.data.user));
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error: any) {
      console.log(error);
      dispatch(registerError(error));
    }
  }
);

export const updateUserHandler = createAsyncThunk(
  "user/update",
  async (
    { form, token }: { form: any; token: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/user`,
        {
          form,
          token,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch(updateUser());
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
