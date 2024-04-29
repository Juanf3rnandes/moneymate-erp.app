import React from "react";
import { MMGridProps } from "./types";
import { GridStyle } from "./styles";

export function MMGrid({ children, ...props }: MMGridProps) {
  return <GridStyle {...props}>{children}</GridStyle>;
}
