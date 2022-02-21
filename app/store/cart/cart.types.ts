import { ICart } from "../../components/shared/interfaces/product.interface";

export interface ICartState {
  products: ICart[];
  currentProduct: ICart;
  amountCart: number;
  isLoading: boolean;
  error: null | string;
  message: null | string;
  isCartPopup: boolean;
}
