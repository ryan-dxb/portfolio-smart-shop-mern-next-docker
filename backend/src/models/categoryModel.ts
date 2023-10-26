import mongoose from "mongoose";

export interface CategoryInput {
  name: string;
  description: string;
  image: string;
  is_active: boolean;
}

export interface CategoryDocument extends CategoryInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new mongoose.Schema<CategoryDocument>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    is_active: { type: Boolean, required: true },
  },
  {
    collection: "categories",
    timestamps: true,
  }
);

const Category = mongoose.model<CategoryDocument>("Category", CategorySchema);

export default Category;
