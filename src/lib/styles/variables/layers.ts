/**
 * Pattern level number layer.
 */
export const layers = {
  /** Level 1 */
  base: 1,
  /** Level 2 */
  aboveBase: 2,
  /** Level 3 */
  overlay: 3,
  /** Level 4 */
  aboveOverlay: 4,
  /** Level 5 */
  belowTop: 5,
  /** Level 6 */
  top: 6,
};
/**
 * Pattern level number layer.
 */
export type Layers = typeof layers;
/**
 * Pattern level number layer.
 */
export type Layer = keyof Layers;
export const layersList = Object.keys(layers) as Layer[];
