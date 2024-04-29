import {
  Align,
  Col,
  Space,
  MediaQuery,
  DisplayPosition,
  Layer,
  Overflow,
} from "@/lib/styles/variables";

type Column = Array<Col | string>;

export interface MMGridProps {
  row?: boolean;
  filled?: boolean;
  fluid?: boolean;
  spacer?: boolean;
  block?: boolean;
  align?: Align;
  justify?: Align | "space-between" | "space-around";
  gap?: Space;
  gutter?: Space | Space[];
  pad?: (Space | string) | (Space | string)[];
  cols?: Column;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  overflow?: Overflow;
  layer?: Layer;
  inset?: (Space | string) | (Space | string)[];
  position?: DisplayPosition;
  responsive?: MediaQuery;
  orderColumn?: number;
  rowStart?: number;
  rowEnd?: number;
  rowSize?: string;
  children?: React.ReactNode | React.ReactNode[];
}
