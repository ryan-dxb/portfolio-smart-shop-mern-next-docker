import CartTable from "@/components/sections/CartTable";
import CartTotal from "@/components/sections/CartTotal";
import { NextPage } from "next";

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  return (
    <main className="content-container">
      <div className="grid grid-cols-3 mt-8 gap-x-8">
        <section className="col-span-2">
          <CartTable />
        </section>
        <aside className="col-span-1">
          <CartTotal />
        </aside>
      </div>
    </main>
  );
};

export default CartPage;
