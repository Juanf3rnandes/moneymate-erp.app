import { GridProps } from "./types";
import styled, { css } from "styled-components";

const GridCols = css<GridProps>`
  display: ${({ block }) => (block ? "block" : "grid")};
  align-items: ${({ align }) => align || "start"};
  justify-items: ${({ justify }) => justify || "start"};
  width: ${({ width }) => width || "100%"};
`;

const GridFlex = css<GridProps>`
  display: ${({ block }) => (block ? "block" : "flex")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ align }) => align || "start"};
  justify-content: ${({ justify }) => justify || "start"};
  width: ${({ width }) => width || "100%"};
`;

export const GridStyle = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => gap || "20px"};

  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-items: ${justify};`}
`;
