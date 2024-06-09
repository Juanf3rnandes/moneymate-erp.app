/**
 * Serialize body to XMLHttpRequestBodyInit
 * @param params Object
 * @return XMLHttpRequestBodyInit
 */
export function bodySerializer<T extends object = any>(
  body?: T,
  configs?: {
    customSerializer?: (body: T) => XMLHttpRequestBodyInit;
  }
) {
  if (body) {
    if (
      body instanceof FormData ||
      body instanceof URLSearchParams ||
      body instanceof Blob
    ) {
      return body;
    }

    if (configs?.customSerializer) return configs.customSerializer(body);

    return JSON.stringify(body);
  }
  return undefined;
}
