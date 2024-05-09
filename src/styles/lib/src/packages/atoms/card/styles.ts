import styled, { css } from "styled-components";

import { animations } from "../../../animations";
import { CardProps } from "./types";

export const CardOverlayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: ${({ theme }) => theme.layers.belowTop};
`;

export const CardLoadingStyle = styled.div`
  width: ${({ theme }) => theme.spaces[5]};
  height: ${({ theme }) => theme.spaces[5]};
  border-radius: 50%;
  animation: 1s linear infinite ${() => animations.spin},
    ${() => animations.fadein} 1s ease;
`;

const CardContainerPadStyle = css<CardProps>`
  ${({ theme, pad }) => {
    if (!pad) return `padding: ${theme.spaces[3]}`;
    if (typeof pad === "string") return `padding: ${theme.spaces[pad]}`;
    if (pad.length === 4) {
      return `padding: ${theme.spaces[pad[0]]} ${theme.spaces[pad[1]]} ${
        theme.spaces[pad[2]]
      } ${theme.spaces[pad[3]]}`;
    }
    if (pad.length === 3) {
      return `padding: ${theme.spaces[pad[0]]} ${theme.spaces[pad[1]]} ${
        theme.spaces[pad[2]]
      }`;
    }
    if (pad.length === 2) {
      return `padding: ${theme.spaces[pad[0]]} ${theme.spaces[pad[1]]}`;
    }
    return `padding: ${theme.spaces[pad[0]]}`;
  }};
`;

const CardContainerBgStyle = css<CardProps>`
  background-color: ${({ theme, color, colorLevel, customColor }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color && theme.colors[color]
      ? theme.colors[color][300]
      : color
      ? color
      : customColor
      ? customColor
      : theme.colors.white[500]};
  ${({ theme, shadow }) =>
    shadow ? `box-shadow: ${theme.shadows[shadow]};` : ""}
`;

const CardContainerAccentStyle = css<CardProps>`
  border-left: ${({ theme, accent, accentLevel }) =>
    accent && accentLevel
      ? `10px solid ${theme.colors[accent][accentLevel]}`
      : accent
      ? `10px solid ${theme.colors[accent][500]}`
      : undefined};
`;

export const CardStyle = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${({ theme, radius }) => theme.spaces[radius || 1]};

  ${({ centered }) =>
    centered &&
    `
    align-items: center;
    justify-content: center;
    `};

  ${({ noRelative }) => (noRelative ? "" : "position: relative;")};

  ${({ height }) =>
    height &&
    `
    max-height: ${height};
    overflow: auto;
  `}
  min-height: ${({ minHeight }) => minHeight};

  ${({
    theme,
    borderless,
    borderSize,
    borderStyle,
    borderColor,
    borderColorLevel,
  }) =>
    borderless
      ? ""
      : `border: ${borderSize || "1px"} ${borderStyle || "solid"} ${
          borderColor && borderColorLevel
            ? theme.colors[borderColor][borderColorLevel]
            : borderColor
            ? theme.colors[borderColor][300]
            : theme.colors.neutral[300]
        }`};

  ${({ theme, hover, color, colorLevel }) =>
    hover &&
    `
    &:hover {
      background-color: ${
        color && colorLevel
          ? theme.colors[color][colorLevel]
          : color
          ? theme.colors[color][500]
          : theme.colors.black
      }80;
    }
  `}

  ${CardContainerBgStyle}
  ${CardContainerAccentStyle}
  ${CardContainerPadStyle}

  ${CardLoadingStyle} {
    ${({ theme, accent, accentLevel }) => {
      return `
      border: 3px solid ${theme.colors.primary[100]};
      border-top: 3px solid ${
        accent && accentLevel
          ? theme.colors[accent][accentLevel]
          : accent
          ? theme.colors[accent][500]
          : theme.colors.primary[500]
      }
    `;
    }}
  }
`;
