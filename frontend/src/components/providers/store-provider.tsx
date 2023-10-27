"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: ProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
