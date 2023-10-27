import { NextPage } from "next";

interface FormTitleProps {
  title: string;
}

const FormTitle: NextPage<FormTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto">
      <h1 className="text-xl font-bold tracking-tight text-center text-primary">
        {title}
      </h1>
    </div>
  );
};

export default FormTitle;
