import { IProduct } from "../../components/shared/interfaces/product.interface";

export interface IProductState {
  products: IProduct[];
  category: string;
  isProductPopup: boolean;
}
