import { Color, ColorLevel } from "../../variables/colors";
import { Theme } from "../../variables/theme";

export interface ThemeConfig {
  customTheme?: Partial<Theme>;
  bgColor: Color;
  bgColorLevel?: ColorLevel;
  textColor?: Color;
  textColorLevel?: ColorLevel;
  height?: string;
  withGlobals?: boolean;
}
