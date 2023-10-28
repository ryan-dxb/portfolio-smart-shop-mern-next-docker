import AllProducts from "@/components/sections/AllProducts";
import FilterMenu from "@/components/sections/FilterMenu";
import { NextPage } from "next";

interface ProductPageProps {}

const ProductPage: NextPage<ProductPageProps> = () => {
  return (
    <main className="grid grid-cols-12 mt-6 gap-x-6 content-container">
      <aside className="col-span-3">
        {/* Filter Menu */}
        <FilterMenu />
      </aside>
      <section className="col-span-9">
        {/* Product List */}
        <AllProducts />
      </section>
    </main>
  );
};

export default ProductPage;
