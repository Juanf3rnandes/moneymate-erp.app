export const typography = {
  h1: {
    family: "Kanit",
    size: "40px",
    lineHeight: 1.2105263157894737,
    letterSpacing: "-0.02em",
  },

  h2: {
    family: "Kanit",
    size: "32px",
    lineHeight: 1.2666666666666666,
    letterSpacing: "-0.01em",
  },

  subtitle: {
    family: "Nunito Sans",
    size: "18px",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },

  body1: {
    family: "Nunito Sans",
    size: "16px",
    lineHeight: 1.5714285714285714,
    letterSpacing: "0.01em",
  },
};

export type Typography = typeof typography;

export type Typo = keyof Typography;

export type FontWeight = "400" | "500" | "600" | "700" | "800";

export const typoList = Object.keys(typography) as Typo[];

export const weightList = ["400", "500", "600", "700", "800"] as FontWeight[];
