import PageHeader from "@/components/common/pageHeader/PageHeader";
import AddNewProductForm from "@/components/forms/product/AddNewProductForm";
import PageContentLayout from "@/components/layouts/PageContentLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NextPage } from "next";

interface AddNewProductProps {}

const AddNewProduct: NextPage<AddNewProductProps> = () => {
  return (
    <div className="flex flex-col h-full ">
      <PageHeader
        title="Add New Product"
        subtitle="Create a new product and add it to your store."
      />

      <PageContentLayout>
        <AddNewProductForm />
      </PageContentLayout>
    </div>
  );
};

export default AddNewProduct;
