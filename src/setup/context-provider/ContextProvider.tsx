import React, { createContext, useContext, useState } from "react";

type CursorContextType = {
  cursorSettings: {
    variant: string;
    title: string;
  };
  projectCursor: () => void;
  defaultCursor: () => void;
};

export const CursorContext = React.createContext<CursorContextType>({
  cursorSettings: {
    variant: "default",
    title: "",
  },
  projectCursor: () => null,
  defaultCursor: () => null,
});

export const useCursorContext = () => useContext(CursorContext);

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [cursorSettings, setCursorSettings] = useState({
    variant: "default",
    title: "",
  });

  const projectCursor = () =>
    setCursorSettings({
      variant: "projectCard",
      title: "View",
    });

  const defaultCursor = () =>
    setCursorSettings({
      variant: "default",
      title: "",
    });

  return (
    <CursorContext.Provider
      value={{ cursorSettings, projectCursor, defaultCursor }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default ContextProvider;
