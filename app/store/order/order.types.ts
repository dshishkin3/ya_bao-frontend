import { IProduct } from "./../../components/shared/interfaces/product.interface";

export type Order = {
  name: string;
  number: string;
  address: string;
  timeToDelivery: string;
  paymentMethod: string;
  surrenderOfMoney?: number;
};

export interface IOrderState {
  products: IProduct[];
  info: Order;
  message?: string | null;
  errorOrder?: string | null;
}
