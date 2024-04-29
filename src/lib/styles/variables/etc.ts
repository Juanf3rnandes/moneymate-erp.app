export const align = ["start", "center", "end"] as const;
export type Align = (typeof align)[number];

export const size = ["xs", "sm", "md", "lg"] as const;
export type Size = (typeof size)[number];

export const textDecoration = [
  "overline",
  "line-through",
  "underline",
  "none",
] as const;
export type TextDecoration = (typeof textDecoration)[number];

export const fontStyle = ["oblique", "italic", "normal"] as const;
export type FontStyle = (typeof fontStyle)[number];

export const textTransform = [
  "capitalize",
  "lowercase",
  "uppercase",
  "none",
] as const;
export type TextTransform = (typeof textTransform)[number];

export const position = ["top", "right", "bottom", "left"] as const;
export type Position = (typeof position)[number];

export const positionExtra = [
  ...position,
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight",
] as const;
export type PositionExtra = (typeof positionExtra)[number];

export const displayPosition = [
  "relative",
  "absolute",
  "fixed",
  "static",
  "sticky",
] as const;
export type DisplayPosition = (typeof displayPosition)[number];

export const sort = ["normal", "asc", "desc"] as const;
export type Sort = (typeof sort)[number];

export const trigger = ["hover", "focus", "click"] as const;
export type Trigger = (typeof trigger)[number];

export const overflow = ["auto", "hidden", "overlay"] as const;
export type Overflow = (typeof overflow)[number];

export const variant = [
  "default",
  "outline",
  "ghost",
  "icon",
  "action",
] as const;
export type Variant = (typeof variant)[number];

export const type = ["button", "reset", "submit"] as const;
export type Type = (typeof type)[number];

export const target = ["_blank", "_parent", "_self"] as const;
export type Target = (typeof target)[number];

export const inputType = [
  "text",
  "cpf",
  "cnpj",
  "area",
  "cep",
  "phone",
  "date",
  "time",
  "datetime",
  "month",
  "week",
  "color",
  "email",
  "uf",
  "number",
  "password",
] as const;
export type InputType = (typeof inputType)[number];

export const borderStyle = [
  "dotted",
  "dashed",
  "solid",
  "none",
  "hidden",
] as const;
export type BorderStyle = (typeof borderStyle)[number];

export const autocomplete = [
  "username",
  "current-password",
  "new-password",
  "on",
  "off",
] as const;
export type Autocomplete = (typeof autocomplete)[number];
