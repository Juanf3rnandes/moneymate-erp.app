import React from "react";

import { ButtonLinkStyle, ButtonLoadingStyle, ButtonStyle } from "./styles";
import { MMButtonProps } from "./types";

export const MMButton = React.forwardRef(function MMButton(
  { children, loading, onHover, ...props }: MMButtonProps,
  ref
) {
  return props.link ? (
    <ButtonLinkStyle
      ref={ref as never}
      onMouseOver={onHover && ((e) => onHover?.(e))}
      onMouseOut={onHover && (() => onHover?.(undefined))}
      {...props}
    >
      {loading ? <ButtonLoadingStyle /> : children}
    </ButtonLinkStyle>
  ) : (
    <ButtonStyle
      ref={ref as never}
      type={props.type || "button"}
      onMouseOver={onHover && ((e) => onHover?.(e))}
      onMouseOut={onHover && (() => onHover?.(undefined))}
      {...props}
    >
      {loading ? <ButtonLoadingStyle /> : children}
    </ButtonStyle>
  );
});
