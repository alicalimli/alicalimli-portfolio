interface CursorSettingsParams {
  variant: string;
  title: string | React.ReactNode;
}

interface CursorContextParams {
  cursorSettings: CursorSettingsParams;
  projectCursor: () => void;
  defaultCursor: () => void;
  otherProjectCursor: (title: string) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}
