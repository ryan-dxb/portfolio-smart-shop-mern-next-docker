import mongoose from "mongoose";

export interface ShopInput {
  name: string;
  owner: mongoose.Schema.Types.ObjectId;
  address: string;
  phone_number: string;
  email: string;
  logo: string;
  banner: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  is_active: boolean;
  is_verified: boolean;
  is_suspended: boolean;

  available_balance: number;
  withdraw_method: string;
  transaction_history: string[];
}

export interface ShopDocument extends ShopInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const ShopSchema = new mongoose.Schema<ShopDocument>(
  {
    name: { type: String, required: true, trim: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    logo: { type: String, required: true },
    banner: { type: String, required: true },
    zip_code: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    is_suspended: { type: Boolean, required: true },

    available_balance: { type: Number, required: true },
    withdraw_method: { type: String, required: true },
    transaction_history: [{ type: String, required: true }],
  },
  {
    collection: "shops",
    timestamps: true,
  }
);
