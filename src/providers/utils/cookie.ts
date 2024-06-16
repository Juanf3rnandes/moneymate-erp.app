import { Dictionary } from "./types";
import { ISODate } from "./types";
import { domainFromUrl } from "./browser";

export function saveCookie(
  data: Dictionary,
  expires?: ISODate,
  sameSite?: "Strict" | "Lax" | "None"
) {
  for (const key of Object.keys(data)) {
    let cookie = `${key}=${data[key]}; Path=/;`;

    if (expires) {
      cookie += ` Expires=${new Date(expires)};`;
    }
    if (typeof window !== "undefined") {
      cookie += ` Domain=${domainFromUrl(window.location.origin)};`;
    }
    if (sameSite) {
      cookie += ` SameSite=${sameSite};`;
    }
    if (typeof document !== "undefined") {
      document.cookie = cookie;
    }
  }
}

function getCookie(key: string) {
  if (typeof document !== "undefined") {
    return document.cookie
      .split("; ")
      .find((x) => x.search(key) > -1)
      ?.split("=")[1];
  }
  return undefined;
}

export function loadCookies(keys: string | string[]) {
  if (Array.isArray(keys)) {
    return keys.reduce((acc, key) => {
      acc.push(getCookie(key));
      return acc;
    }, [] as (string | undefined)[]);
  }
  return [getCookie(keys)];
}
