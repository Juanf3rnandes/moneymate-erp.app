import {
  Color,
  ColorLevel,
  Shadow,
  Space,
  BorderStyle,
} from "@/lib/styles/variables";

export interface MMCardProps {
  height?: string;
  minHeight?: string;
  loading?: boolean;
  centered?: boolean;
  radius?: Space;
  pad?: Space | Space[];
  color?: Color;
  colorLevel?: ColorLevel;
  accent?: Color;
  accentLevel?: ColorLevel;
  borderless?: boolean;
  borderSize?: string;
  borderStyle?: BorderStyle;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  hover?: boolean;
  shadow?: Shadow;
  noRelative?: boolean;
  customColor?: string;
  children?: React.ReactNode | React.ReactNode[];
}
