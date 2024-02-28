import mongoose from "mongoose";
import { IOrder } from "../types/order.type";
import { Cart } from "./cart.model";
import { ICart } from "../types/cart.type";

const orderSchema = new mongoose.Schema<IOrder>({
  cart: {
    type: Cart,
    required: true,
  },

  payment: {
    type: Number,
    required: true,
  },

  coupon: {
    type: Number,
    required: true,
  },

  expeditionCost: {
    type: Boolean,
    required: true,
  },
});
