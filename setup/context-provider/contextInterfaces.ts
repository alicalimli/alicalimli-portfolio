export interface CursorSettingsParams {
  variant: string;
  title: string | React.ReactNode;
}

export interface CursorContextParams {
  cursorSettings: CursorSettingsParams;
  projectCursor: () => void;
  defaultCursor: () => void;
  otherProjectCursor: () => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
