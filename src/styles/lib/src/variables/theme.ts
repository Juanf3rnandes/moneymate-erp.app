import { Breakpoints, breakpoints } from "./breakpoints";
import { Colors, colors } from "./colors";
import { Grid, grid } from "./grid";
import { Layers, layers } from "./layers";
import { MediaQuerys, mediaQuery } from "./mediaQuery";
import { Shadows, shadows } from "./shadow";
import { Spaces, spaces } from "./spaces";
import { Typography, typography } from "./typograph";

export interface Theme {
  typography: Typography;
  layers: Layers;
  spaces: Spaces;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQuery: MediaQuerys;
  shadows: Shadows;
  grid: Grid;
}

export const theme: Theme = {
  typography,
  layers,
  spaces,
  colors,
  breakpoints,
  mediaQuery,
  shadows,
  grid,
};
