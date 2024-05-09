import { GridStyle } from "./styles";
import { GridProps } from "./types";

export default function Grid({ ...props }: GridProps) {
  return <GridStyle {...props}></GridStyle>;
}
