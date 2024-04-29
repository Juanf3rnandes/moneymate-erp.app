import {
  Color,
  ColorLevel,
  Size,
  Space,
  Target,
  Type,
  Variant,
} from "@/lib/styles/variables";
import { MMSource } from "../types";

export interface MMButtonProps {
  id?: string;
  link?: boolean;
  full?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: Size | "100%";
  href?: string;
  rounded?: boolean;
  noPadding?: boolean;
  clickable?: boolean;
  noHover?: boolean;
  bgHover?: boolean;
  active?: boolean;
  radius?: Space;
  type?: Type;
  target?: Target;
  variant?: Variant;
  color?: Color;
  colorLevel?: ColorLevel;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  onClick?: (e: MMSource) => void;
  onHover?: (e?: MMSource) => void;
  children?: React.ReactNode | React.ReactNode[];
}
