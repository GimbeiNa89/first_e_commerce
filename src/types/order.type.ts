import { ICart } from "./cart.type";
import { IPayment } from "./payment.type";

export interface IOrder {
  id: string;
  cart: ICart;
  payment: IPayment;
  coupon: number;
  expeditionCost: string;
}
