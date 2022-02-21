import { IUser } from "./../../../store/user/user.types";
export interface IValidProfile {
  name: string;
  number: string;
  password: string;
  address: string;
}

export const validationProfile = (data: IValidProfile, user: IUser | null) => {
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

  // number
  if (user?.number === undefined) {
    if (data.number === undefined || data.number.length !== 16) {
      return "Корректно введите свой номер";
    }
  }

  // password
  if (user?.password === undefined) {
    if (
      data.password === undefined ||
      data.number.length < 6 ||
      data.number.length > 20
    ) {
      return "Корректно введите свой пароль (от 6 до 20 символов)";
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

  return false;
};
