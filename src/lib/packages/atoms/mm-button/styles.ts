import styled, { css } from "styled-components";
import { shadeColor } from "../../shared/string";
import { MMButtonProps } from "./types";
import { animations } from "../../styles/animations";

const ButtonSizesStyle = css<MMButtonProps>`
  width: ${({ theme, full, size, variant }) => {
    if (full) return "100%";
    if (variant === "icon") {
      switch (size) {
        case "xs":
          return theme.spaces[5];
        case "sm":
          return theme.spaces[6];
        case "md":
          return theme.spaces[7];
        case "lg":
          return theme.spaces[8];
      }
    }
    return "auto";
  }};
  height: ${({ theme, size, variant }) => {
    switch (size) {
      case "xs":
        return theme.spaces[5];
      case "sm":
        return theme.spaces[6];
      case "md":
        return theme.spaces[7];
      case "lg":
        return theme.spaces[8];
      default:
        if (size === "100%") {
          return size;
        }
        if (variant === "icon" || variant === "action") {
          return "auto";
        }
        return theme.spaces[7];
    }
  }};
  padding: ${({ theme, variant, size, noPadding }) => {
    if (variant === "icon" || variant === "action" || noPadding) {
      return undefined;
    }
    switch (size) {
      case "xs":
        return `${theme.spaces[1]} ${theme.spaces[2]}`;
      default:
        return `${theme.spaces[1]} ${theme.spaces[3]}`;
    }
  }};
`;

const ButtonStylesStyle = css<MMButtonProps>`
  ${({
    theme,
    variant,
    color,
    colorLevel,
    bgColor,
    bgColorLevel,
    borderColor,
    borderColorLevel,
  }) => {
    const hash =
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.primary[500];
    const bgHash =
      bgColor && bgColorLevel
        ? theme.colors[bgColor][bgColorLevel]
        : bgColor
        ? theme.colors[bgColor][500]
        : "transparent";
    const borderHash =
      borderColor && borderColorLevel
        ? theme.colors[borderColor][borderColorLevel]
        : borderColor
        ? theme.colors[borderColor][500]
        : hash;

    switch (variant) {
      case "outline":
        return `
          background-color: ${bgHash};
          color: ${hash};
          border: 1.5px solid ${borderHash};
        `;
      case "ghost":
      case "icon":
      case "action":
        return `
          background-color: ${bgHash};
          color: ${hash};
        `;
      default:
        return `
          background-color: ${hash};
          color: ${theme.colors.white[500]};
        `;
    }
  }}
`;

const ButtonHoverStyle = css<MMButtonProps>`
  &:hover:not(:disabled) {
    ${({ theme, variant, color, bgHover }) => {
      const hash =
        color === "white"
          ? theme.colors.neutralGrey[300]
          : color
          ? shadeColor(theme.colors[color][500], -5)
          : theme.colors.neutral[600];

      if (bgHover) {
        switch (variant) {
          case "default":
            return `
              background-color: ${hash};
            `;
          default:
            return `
              background-color: ${theme.colors.neutralGrey[100]};
            `;
        }
      }

      switch (variant) {
        case "outline":
          return `
            background-color: ${theme.colors.neutralGrey[100]};
          `;
        case "ghost":
        case "icon":
        case "action":
          return `
            color: ${hash};
          `;
        default:
          return `
            background-color: ${hash};
          `;
      }
    }}
  }
`;

const ButtonActiveStyle = css<MMButtonProps>`
  &:not(:disabled) {
    ${({ theme, color, colorLevel }) => {
      const hash =
        color && colorLevel
          ? theme.colors[color][colorLevel]
          : color
          ? theme.colors[color][500]
          : theme.colors.primary[500];
      return `
        outline: 1px solid ${hash};
      `;
    }}
  }
`;

const ButtonDisabledStyle = css<MMButtonProps>`
  &:disabled {
    ${({ theme, variant }) => {
      switch (variant) {
        case "outline":
          return `
            border-color: ${theme.colors.primary[100]};
            color: ${theme.colors.primary[100]};
          `;
        case "ghost":
        case "icon":
        case "action":
          return `
            color: ${theme.colors.primary[100]};
          `;
        default:
          return `
            background-color: ${theme.colors.neutral[300]};
          `;
      }
    }}
  }
`;

const ButtonCommonStyle = css<MMButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[2]};
  border-radius: ${({ theme, rounded, radius }) =>
    rounded ? "50%" : theme.spaces[radius || 1]};
  border: none;
  font-weight: 600;
  transition: background-color, outline 0.5s;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`;

export const ButtonLoadingStyle = styled.div`
  width: ${({ theme }) => theme.spaces[5]};
  height: ${({ theme }) => theme.spaces[5]};
  border-radius: 50%;
  animation: 1s linear infinite ${() => animations.spin},
    ${() => animations.fadein} 1s ease;
`;

const ButtonShared = css<MMButtonProps>`
  ${ButtonCommonStyle}
  ${ButtonSizesStyle}
  ${ButtonStylesStyle}
  ${ButtonDisabledStyle}
  ${({ noHover }) => (noHover ? "" : ButtonHoverStyle)}
  ${({ active }) => (active ? ButtonActiveStyle : "")}

  ${({ clickable, disabled }) =>
    clickable === false || disabled
      ? `
      pointer-events: none !important;
      cursor: not-allowed !important;
    `
      : ""}

  ${ButtonLoadingStyle} {
    ${({ theme, variant, color, colorLevel }) => {
      switch (variant) {
        case "outline":
        case "ghost":
        case "icon":
        case "action":
          return `
              border: 3px solid ${
                color ? theme.colors[color][100] : theme.colors.primary[100]
              };
              border-top: 3px solid ${
                color && colorLevel
                  ? theme.colors[color][colorLevel]
                  : color
                  ? theme.colors[color][500]
                  : theme.colors.primary[300]
              };
            `;
        default:
          return `
              border: 3px solid rgba(255, 255, 255, 0.5);
              border-top: 3px solid ${
                color && colorLevel
                  ? theme.colors[color][colorLevel]
                  : color
                  ? theme.colors[color][500]
                  : theme.colors.white[500]
              };
            `;
      }
    }}
  }
`;

export const ButtonStyle = styled.button<MMButtonProps>`
  ${ButtonShared}
`;

export const ButtonLinkStyle = styled.a<MMButtonProps>`
  ${ButtonShared}
`;
