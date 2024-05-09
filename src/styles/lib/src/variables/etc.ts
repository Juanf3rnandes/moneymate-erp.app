export const align = ["start", "center", "end"] as const;
export type Align = (typeof align)[number];

export const borderStyle = [
  "dotted",
  "dashed",
  "solid",
  "none",
  "hidden",
] as const;
export type BorderStyle = (typeof borderStyle)[number];
