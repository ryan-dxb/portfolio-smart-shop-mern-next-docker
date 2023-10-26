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
    stock_left: Function;
    stock_sold: number;
  };
  images: string[];
  reviews: string[];
  rating: number;
  is_active: boolean;
  sold: number;
  shop_id: mongoose.Schema.Types.ObjectId;
  brand: { name: string; logo: string };
  sku: string;
  is_featured: boolean;
  is_taxable: boolean;
  tax: number;
  tax_included: boolean;
  tax_type: string;
  shipping_class: { name: string; price: number };
}

export interface ProductDocument extends ProductInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<ProductDocument>(
  {
    name: { type: String, required: true, trim: true },
    short_description: { type: String, required: true, trim: true },
    long_description: { type: String, required: true, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    tags: [{ type: String, required: true }],
    base_price: { type: Number, required: true },
    discount_price: { type: Number, required: true },
    stock: {
      total_over_lifetime: { type: Number, required: true },
      stock_left: { type: Function, required: true },
      stock_sold: { type: Number, required: true },
    },
    images: [{ type: String, required: true }],
    reviews: [{ type: String, required: true }],
    rating: { type: Number, required: true },
    is_active: { type: Boolean, required: true },
    sold: { type: Number, required: true },
    shop_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    brand: {
      name: { type: String, required: true },
      logo: { type: String, required: true },
    },
    sku: { type: String, required: true },
    is_featured: { type: Boolean, required: true },
    is_taxable: { type: Boolean, required: true },
    tax: { type: Number, required: true },
    tax_included: { type: Boolean, required: true },
    tax_type: { type: String, required: true },
    shipping_class: {
      name: { type: String, required: true },
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", ProductSchema);

export default ProductModel;
