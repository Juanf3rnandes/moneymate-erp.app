import { Color, ColorLevel, Theme } from "@/lib/styles/variables";

export interface ThemeConfig {
  customTheme?: Partial<Theme>;
  bgColor: Color;
  bgColorLevel?: ColorLevel;
  textColor?: Color;
  textColorLevel?: ColorLevel;
  height?: string;
  withGlobals?: boolean;
}
