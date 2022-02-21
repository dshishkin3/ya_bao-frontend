import { IUser } from "./../../../store/user/user.types";

interface IValidOrder {
  name: string;
  number: string;
  address: string;
  timeToDelivery: string;
  paymentMethod: string;
}

export const validationOrder = (data: IValidOrder, user: IUser | null) => {
  // name
  if (user?.name === undefined) {
    if (
      data.name === undefined ||
      data.name.length < 3 ||
      data.name.length > 20
    ) {
      return "Корректно введите своё имя";
    }
  }

  // address
  if (user?.address === undefined) {
    if (
      data.address === undefined ||
      data.address.length < 5 ||
      data.address.length > 40
    ) {
      return "Корректно введите адрес доставки";
    }
  }

  // time to delivery
  if (data.timeToDelivery === undefined) {
    return "Выберите время доставки";
  }

  // payment method
  if (data.paymentMethod === null) {
    return "Выберите способ оплаты";
  }
  return false;
};
