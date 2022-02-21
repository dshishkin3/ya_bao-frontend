import {
  ICart,
  IProduct,
} from "../../components/shared/interfaces/product.interface";

export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: null | string;
  messageUser: null | string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  number: string;
  address: string;
  cart: ICart[];
  orders: IOrder[];
  amountCart: number;
  subscribe: boolean;
  __v: number;
}

export interface IUpdateUser {
  name: string;
  number: string;
  password: string;
  address: string;
}

export interface IOrder {
  name: string;
  number: string;
  address: string;
  timeToDelivery: string;
  paymentMethod: string;
  amount: number;
  products: IProduct[];
}
