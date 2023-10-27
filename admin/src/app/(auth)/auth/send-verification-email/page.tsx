import SendVerificationEmailForm from "@/components/authForms/SendVerificationEmailForm";
import FormTitle from "@/components/authForms/common/FormTitle";
import { NextPage } from "next";

interface SendVerificationEmailProps {}

const SendVerificationEmail: NextPage<SendVerificationEmailProps> = () => {
  return (
    <>
      <FormTitle title="Verification email" />
      <SendVerificationEmailForm />
    </>
  );
};

export default SendVerificationEmail;
