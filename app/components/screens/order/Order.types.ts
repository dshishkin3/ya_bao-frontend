export interface IInputsProps {
  register: (arg0: any) => void;
  setValue: (
    arg0: "number" | "address" | "name" | "timeToDelivery" | "surrenderOfMoney",
    arg1: string
  ) => void;
}

export interface IPaymentProps {
  register: (arg0: any) => void;
  setValue: (arg0: "paymentMethod" | "surrenderOfMoney", arg1: string) => void;
}

export type FormData = {
  name: string;
  number: string;
  address: string;
  timeToDelivery: string;
  paymentMethod: string;
  surrenderOfMoney?: number;
};
