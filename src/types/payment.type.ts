export interface IPayment {
  id: string;
  name: string;
  surname: string;
  type: string;
  pan: number;
  cvc: number;
  expire: Date;
}
