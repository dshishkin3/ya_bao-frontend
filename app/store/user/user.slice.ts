import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./user.actions";

import { IUser, IUserState } from "./user.types";

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: null,
  messageUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // login
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.messageUser = "Вы успешно вошли!";
    },
    loginError: (state, action: any) => {
      state.user = null;
      state.error = action.payload.response.data.error;
    },

    // register
    register: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.messageUser = "Вы успешно зарегистрировались!";
    },
    registerError: (state, action: any) => {
      state.user = null;
      state.error = action.payload.response.data.error;
    },

    // logout
    logout: (state) => {
      state.user = null;
      state.messageUser = null;
    },

    // update
    updateUser: (state) => {
      state.messageUser = "Данные обновлены!";
    },

    // popups
    setErrorProfile: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    closeNotificationUserPopup: (state) => {
      state.messageUser = null;
      state.error = null;
    },
  },
  // получение пользователя через JWT
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<IUserState>) => {
          state.isLoading = false;
          state.user = action.payload.user;
        }
      ),
      builder.addCase(
        fetchUser.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload.error;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

export const { login, loginError, register, registerError, updateUser } =
  userSlice.actions;
