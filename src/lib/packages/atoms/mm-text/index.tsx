import React from "react";
import {
  TextHeading1Style,
  TextHeading2Style,
  TextHeading3Style,
  TextHeading4Style,
  TextOthersStyle,
} from "./styles";
import { MMTextProps } from "./types";

export function MMText({ children, ...props }: MMTextProps) {
  return React.useMemo(() => {
    return <TextOthersStyle {...props}>{children}</TextOthersStyle>;
  }, [props]);
}
