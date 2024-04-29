import { MMGridProps } from "./types";
import { parsePercent, roundNumber } from "../../shared/number";
import { parsePixel } from "@/styles/utils";
import styled, { css } from "styled-components";

function factoryTemplateGrid(theme: any, cols: any, gap: any) {
  if (cols && cols.reduce) {
    return `grid-template-columns: ${cols.reduce((acc: any, col: any) => {
      const gridcol = theme.grid[col];
      if (gridcol) {
        const gapv = parsePixel(theme.spaces[gap]);
        const colv = parsePercent(gridcol);
        const gapr = roundNumber(gapv - gapv * (colv / 100));
        return acc + ` calc(${gridcol} - ${gapr}px)`;
      }
      return acc + ` ${col}`;
    }, "")};`;
  }
  return "";
}

const GridGutterStyle = css<MMGridProps>`
  ${({ theme, gutter }) => {
    if (!gutter || gutter?.length === 0) return "";
    if (typeof gutter === "string")
      return `margin: -${theme.spaces[gutter]} -${theme.spaces[gutter]} -${theme.spaces[gutter]} -${theme.spaces[gutter]}`;
    if (gutter.length === 4) {
      return `margin: -${theme.spaces[gutter[0]]} -${
        theme.spaces[gutter[1]]
      } -${theme.spaces[gutter[2]]} -${theme.spaces[gutter[3]]}`;
    }
    if (gutter.length === 3) {
      return `margin: -${theme.spaces[gutter[0]]} -${
        theme.spaces[gutter[1]]
      } -${theme.spaces[gutter[2]]}`;
    }
    if (gutter.length === 2) {
      return `margin: -${theme.spaces[gutter[0]]} -${theme.spaces[gutter[1]]}`;
    }
    return `margin: -${theme.spaces[gutter[0]]}`;
  }};
`;

const GridPadStyle = css<MMGridProps>`
  ${({ theme, pad }) => {
    if (!pad) return "";
    if (typeof pad === "string") return `padding: ${theme.spaces[pad] || pad}`;
    if (pad.length === 4) {
      return `padding: ${theme.spaces[pad[0]] || pad[0]} ${
        theme.spaces[pad[1]] || pad[1]
      } ${theme.spaces[pad[2]] || pad[2]} ${theme.spaces[pad[3]] || pad[3]}`;
    }
    if (pad.length === 3) {
      return `padding: ${theme.spaces[pad[0]] || pad[0]} ${
        theme.spaces[pad[1]] || pad[1]
      } ${theme.spaces[pad[2]] || pad[2]}`;
    }
    if (pad.length === 2) {
      return `padding: ${theme.spaces[pad[0]] || pad[0]} ${
        theme.spaces[pad[1]] || pad[1]
      }`;
    }
    return `padding: ${theme.spaces[pad[0]] || pad[0]}`;
  }};
`;

const GridCols = css<MMGridProps>`
  display: ${({ block }) => (block ? "block" : "grid")};
  align-items: ${({ align }) => align || "start"};
  justify-items: ${({ justify }) => justify || "start"};
  width: ${({ width }) => width || "100%"};

  ${({ theme, cols, gap }) => `
      ${factoryTemplateGrid(theme, cols, gap)}
    `}
`;

const GridFlex = css<MMGridProps>`
  display: ${({ block }) => (block ? "block" : "flex")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ align }) => align || "start"};
  justify-content: ${({ justify }) => justify || "start"};
  width: ${({ width }) => width || "100%"};
`;

const GridFilled = css<MMGridProps>`
  & > * {
    width: 100%;
  }
`;

const GridExtra = css<MMGridProps>`
  ${({ orderColumn }) => orderColumn && `grid-column: ${orderColumn};`}
  ${({ rowSize }) => rowSize && `grid-auto-rows: ${rowSize};`}
    ${({ rowStart }) => rowStart && `grid-row-start: ${rowStart};`}
    ${({ rowEnd }) => rowEnd && `grid-row-end: ${rowEnd};`}
`;

const GridMobile = css<MMGridProps>`
  ${({ theme, responsive, row, align, justify }) =>
    responsive
      ? `
      @media (${theme.mediaQuery[responsive]}) {
        display: flex;
        flex-direction: column;
        align-items: ${(row ? align : justify) || "start"};
        justify-content: ${(row ? justify : align) || "start"};
        width: 100%;
      }
    `
      : ""}
`;

export const GridStyle = styled.div<MMGridProps>`
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: ${({ overflow }) => overflow};
  z-index: ${({ theme, layer }) =>
    layer ? theme.layers[layer || "base"] : undefined};
  position: ${({ position }) => position};
  gap: ${({ theme, gap }) => (gap ? theme.spaces[gap] : undefined)};
  ${({ spacer }) => (spacer ? "flex: 1 1 auto;" : "")}
  ${({ fluid }) => (fluid ? "margin: auto;" : "")}
    ${({ theme, inset }) => {
    if (!inset) return "";
    if (Array.isArray(inset)) {
      return `
          ${inset[0] ? `top: ${theme.spaces[inset[0]] || inset[0]};` : ""};
          ${inset[1] ? `right: ${theme.spaces[inset[1]] || inset[1]};` : ""};
          ${inset[2] ? `bottom: ${theme.spaces[inset[2]] || inset[2]};` : ""};
          ${inset[3] ? `left: ${theme.spaces[inset[3]] || inset[3]};` : ""};
        `;
    }
    return `inset: ${inset};`;
  }}
    ${({ filled }) => (filled ? GridFilled : "")}
    ${({ cols }) => (cols ? GridCols : GridFlex)}
    ${GridGutterStyle}
    ${GridPadStyle}
    ${GridMobile}
    ${GridExtra}
`;
