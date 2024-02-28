import mongoose from "mongoose";
import { IPayment } from "../types/payment.type";

const paymentSchema = new mongoose.Schema<IPayment>(
  {
    name: {
      type: String,
      require: true,
    },

    surname: {
      type: String,
      require: true,
    },

    pan: {
      type: Number,
      require: true,
    },

    cvc: {
      type: Number,
      require: true,
    },

    expire: {
      type: Date,
      require: true,
    },
  },

  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
