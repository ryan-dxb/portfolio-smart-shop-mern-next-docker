import ForgotPasswordForm from "@/components/authForms/ForgotPasswordForm";
import FormTitle from "@/components/authForms/common/FormTitle";
import { NextPage } from "next";

interface ForgotPasswordProps {}

const ForgotPassword: NextPage<ForgotPasswordProps> = () => {
  return (
    <>
      <FormTitle title="Forgot your password" />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
