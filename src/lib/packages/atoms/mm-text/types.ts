import {
  Align,
  Color,
  ColorLevel,
  FontStyle,
  FontWeight,
  Space,
  TextDecoration,
  TextTransform,
  Typo,
} from "@/lib/styles/variables";

export interface MMTextProps {
  typo: Typo;
  weight?: FontWeight;
  align?: Align;
  color?: Color;
  colorLevel?: ColorLevel;
  nowrap?: boolean;
  prewrap?: boolean;
  title?: string;
  decoration?: TextDecoration;
  spacing?: string;
  size?: Space;
  height?: Space | string;
  fontStyle?: FontStyle;
  transform?: TextTransform;
  children?: React.ReactNode | React.ReactNode[];
}
