import mongoose from "mongoose";

export interface CategoryInput {
  name: string;
  is_active: boolean;
}

export interface CategoryDocument extends CategoryInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new mongoose.Schema<CategoryDocument>(
  {
    name: { type: String, required: true, trim: true },
    is_active: { type: Boolean, required: true, default: true },
  },
  {
    collection: "categories",
    timestamps: true,
  }
);

const CategoryModel = mongoose.model<CategoryDocument>(
  "Category",
  CategorySchema
);

export default CategoryModel;
