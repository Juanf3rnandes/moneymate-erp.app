import React from "react";

import { CardLoadingStyle, CardOverlayStyle, CardStyle } from "./styles";
import { MMCardProps } from "./types";

export function MMCard({ loading, children, ...props }: MMCardProps) {
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
