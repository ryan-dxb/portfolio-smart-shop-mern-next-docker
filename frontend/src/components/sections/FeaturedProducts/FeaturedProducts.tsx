import { StoreItemCardOne } from "@/components/shared/ItemCards";
import SectionHeader from "@/components/shared/SectionHeader";
import { NextPage } from "next";

interface FeaturedProductsProps {}

const FeaturedProducts: NextPage<FeaturedProductsProps> = () => {
  return (
    <section>
      {/* Section Title */}
      <SectionHeader title1="Featured" title2="Products" viewAllLink="#" />
      <div className="flex justify-between mx-auto mt-8 ">
        <StoreItemCardOne />
        <StoreItemCardOne />
        <StoreItemCardOne />
        <StoreItemCardOne />
        <StoreItemCardOne />
      </div>
    </section>
  );
};

export default FeaturedProducts;
