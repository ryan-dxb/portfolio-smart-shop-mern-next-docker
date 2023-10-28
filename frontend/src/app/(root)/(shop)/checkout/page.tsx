import { NextPage } from "next";

interface CheckOutPageProps {}

const CheckOutPage: NextPage<CheckOutPageProps> = () => {
  return (
    <main className="content-container">
      <div className="grid grid-cols-2 mt-8 gap-x-8">
        <section>Form</section>
        <section>OrderSummary</section>
      </div>
    </main>
  );
};

export default CheckOutPage;
