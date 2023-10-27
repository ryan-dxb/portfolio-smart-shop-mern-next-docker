import RegisterForm from "@/components/authForms/RegisterForm";
import FormLayout from "@/components/authForms/common/FormLayout";
import FormTitle from "@/components/authForms/common/FormTitle";
import { NextPage } from "next";

interface RegisterPageProps {}

const RegisterPage: NextPage<RegisterPageProps> = () => {
  return (
    <>
      <FormTitle title="Create an account" />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
