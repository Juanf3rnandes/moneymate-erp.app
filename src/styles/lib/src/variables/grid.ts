/**
 * Width col base in grid 12 cols.
 */
export const grid = {
  /** Return 0% */
  "0": "0%",
  /** Return 8.333333333% */
  "1": "8.333333333%",
  /** Return 16.66666667% */
  "2": "16.66666667%",
  /** Return 25% */
  "3": "25%",
  /** Return 33.33333333% */
  "4": "33.33333333%",
  /** Return 41.66666667% */
  "5": "41.66666667%",
  /** Return 50% */
  "6": "50%",
  /** Return 58.33333333% */
  "7": "58.33333333%",
  /** Return 66.66666667% */
  "8": "66.66666667%",
  /** Return 75% */
  "9": "75%",
  /** Return 83.33333333% */
  "10": "83.33333333%",
  /** Return 91.66666667% */
  "11": "91.66666667%",
  /** Return 100% */
  "12": "100%",
};
/**
 * Width col base in grid 12 cols.
 */
export type Grid = typeof grid;
/**
 * Width col base in grid 12 cols.
 */
export type Col = keyof Grid;
export const gridList = Object.keys(grid) as Col[];
