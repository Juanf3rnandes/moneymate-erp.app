import { Align, Space } from "../../../variables";

export interface GridProps {
  row?: boolean;
  cols?: string;
  gap?: Space;
  children?: React.ReactNode | React.ReactNode[];
  align?: Align;
  justify?: Align | "space-between" | "space-around";
  block?: boolean;
  width?: string;
}
