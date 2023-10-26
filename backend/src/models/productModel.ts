import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface ProductInput {
  name: string;
  short_description: string;
  long_description: string;
  category: mongoose.Schema.Types.ObjectId;
  tags: string[];
  base_price: number;
  discount_price: number;
  stock: {
    total_over_lifetime: number;
    stock_left: number;
    stock_sold: number;
  };
  images: string[];
  reviews: string[];
  rating: number;
  is_active: boolean;
  sold: number;
  shop_id: mongoose.Schema.Types.ObjectId;
  brand: {
    name: string;
    logo: {
      public_id: string;
      url: string;
    };
  };
  sku: string;
  is_featured: boolean;
  is_taxable: boolean;
  taxes: {
    tax: number;
    tax_included: boolean;
    tax_type: string;
  }[];
}

export interface ProductDocument extends ProductInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<ProductDocument>(
  {
    name: { type: String, required: true, trim: true },
    short_description: { type: String, trim: true },
    long_description: { type: String, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    tags: [{ type: String }],
    base_price: { type: Number, required: true },
    discount_price: { type: Number },
    stock: {
      total_over_lifetime: { type: Number },
      stock_left: { type: Number },
      stock_sold: { type: Number },
    },
    images: [{ type: String }],
    reviews: [{ type: String }],
    rating: { type: Number },
    is_active: { type: Boolean, required: true, default: true },
    shop_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    brand: {
      name: { type: String, required: true },
      logo: { type: String },
    },
    sku: { type: String, required: true, unique: true },
    is_featured: { type: Boolean, default: false },
    is_taxable: { type: Boolean, default: false },
    taxes: [
      {
        tax: { type: Number },
        tax_included: { type: Boolean },
        tax_type: { type: String },
      },
    ],
  },
  {
    collection: "products",
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", ProductSchema);

export default ProductModel;
