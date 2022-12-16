import React, { createContext, useContext, useState } from "react";

type CursorContextType = {
  cursorSettings: {
    variant: string;
    title: string;
  };
  projectCursor: () => void;
  defaultCursor: () => void;
  otherProjectCursor: (title: string) => void;
};

export const CursorContext = React.createContext<CursorContextType>({
  cursorSettings: {
    variant: "default",
    title: "",
  },
  projectCursor: () => null,
  defaultCursor: () => null,
  otherProjectCursor: (title: string) => null,
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

  const projectCursor = (title: string = "View") =>
    setCursorSettings({
      variant: "projectCard",
      title,
    });

  const otherProjectCursor = (title: string) =>
    setCursorSettings({
      variant: "otherProject",
      title,
    });

  const defaultCursor = () =>
    setCursorSettings({
      variant: "default",
      title: "",
    });

  return (
    <CursorContext.Provider
      value={{
        cursorSettings,
        projectCursor,
        defaultCursor,
        otherProjectCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default ContextProvider;
