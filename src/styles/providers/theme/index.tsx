import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
  ThemeContext,
} from "styled-components";
import { Theme, theme as defaultTheme } from "@/lib/styles/variables";
import ThemeGlobals from "./globals";
import { ThemeConfig } from "./types";

export type { ThemeConfig };

interface ThemeProviderProps {
  configs: ThemeConfig;
  children?: React.ReactNode;
}

export const ThemeProvider = ({ configs, children }: ThemeProviderProps) => {
  const [customTheme, setCustomTheme] = React.useState(configs?.customTheme);

  const changeTheme = React.useCallback(
    (v: Partial<Theme>) => setCustomTheme(v),
    []
  );

  const value = React.useMemo(
    () => ({
      ...defaultTheme,
      ...customTheme,
      changeTheme,
    }),
    [customTheme]
  );

  return (
    <StyledProvider theme={value}>
      {configs?.withGlobals && <ThemeGlobals {...configs} />}
      {children}
    </StyledProvider>
  );
};

export const useTheme = () => React.useContext<DefaultTheme>(ThemeContext);
