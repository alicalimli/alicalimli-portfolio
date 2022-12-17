import React, { createContext, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import {
  CursorContextParams,
  ContextProviderProps,
  CursorSettingsParams,
} from "./contextInterfaces";

export const CursorContext = createContext<CursorContextParams>({
  cursorSettings: {
    variant: "default",
    title: "",
  },
  projectCursor: () => null,
  defaultCursor: () => null,
  otherProjectCursor: () => null,
});

const CursorContextProvider = ({ children }: ContextProviderProps) => {
  const [cursorSettings, setCursorSettings] = useState<CursorSettingsParams>({
    variant: "default",
    title: "",
  });

  const projectCursor = () =>
    setCursorSettings({
      variant: "projectCard",
      title: "View",
    });

  const otherProjectCursor = () =>
    setCursorSettings({
      variant: "otherProject",
      title: <BiLinkExternal className="text-2xl" />,
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

export default CursorContextProvider;
