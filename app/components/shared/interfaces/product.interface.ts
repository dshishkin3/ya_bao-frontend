export interface IProduct {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  urlImg: string;
  type: string;
  _v?: number;
}

export interface ICart {
  _id: string;
  title: string;
  subtitle: string;
  urlImg: string;
  count: number;
  price: number;
  defaultPrice: number;
  category?: string;
  size?: string;
  type: string;
  extension?: IExtension;
}

export interface IExtension {
  _id: string;
  title: string;
  urlImg: string;
  price: number;
}
