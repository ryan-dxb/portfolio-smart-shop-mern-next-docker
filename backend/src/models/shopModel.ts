import mongoose from "mongoose";

export interface ShopInput {
  name: string;
  owner: mongoose.Schema.Types.ObjectId;
  address: string;
  phone_number: string;
  email: string;
  logo: {
    url: string;
    public_id: string;
  };
  banner: {
    url: string;
    public_id: string;
  };
  zip_code: string;
  city: string;
  state: string;
  country: string;
  is_active: boolean;
  is_suspended: boolean;

  available_balance: number;
  withdraw_method: string;
  transaction_history: {
    transaction_id: string;
    amount: number;
    status: string;
    date: Date;
  }[];
}

export interface ShopDocument extends ShopInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const ShopSchema = new mongoose.Schema<ShopDocument>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: { type: String },
    phone_number: { type: String },
    email: { type: String, required: true, unique: true },
    logo: {
      url: { type: String },
      public_id: { type: String },
    },
    banner: {
      url: { type: String },
      public_id: { type: String },
    },
    zip_code: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    is_active: { type: Boolean, default: true },
    is_suspended: { type: Boolean, default: false },

    available_balance: { type: Number },
    withdraw_method: { type: String },
    transaction_history: [
      {
        transaction_id: { type: String },
        amount: { type: Number },
        status: { type: String },
        date: { type: Date },
      },
    ],
  },
  {
    collection: "shops",
    timestamps: true,
  }
);

const ShopModel = mongoose.model<ShopDocument>("Shop", ShopSchema);

export default ShopModel;
