import React from "react";
import { CardLoadingStyle, CardOverlayStyle, CardStyle } from "./styles";
import { CardProps } from "./types";

export function Card({ loading, children, ...props }: CardProps) {
  return (
    <CardStyle {...props}>
      {children}
      {loading && (
        <CardOverlayStyle>
          <CardLoadingStyle />
        </CardOverlayStyle>
      )}
    </CardStyle>
  );
}
