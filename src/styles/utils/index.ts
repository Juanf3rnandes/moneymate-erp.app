export function parsePixel(px?: string): number {
  if (!px) return 0;

  let result = Number(px.replace(/[^0-9]/gi, ""));

  if (px.includes("%")) {
    result = 0;
  }
  if (px.includes("vh")) {
    result = (result / 100) * (document.body.clientHeight || 0);
  }
  if (px.includes("vw")) {
    result = (result / 100) * (document.body.clientWidth || 0);
  }

  return result;
}
