import React from "react";
import CursorContextProvider from "./CursorContextProvider";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  return <CursorContextProvider>{children}</CursorContextProvider>;
};

export default ContextProvider;
