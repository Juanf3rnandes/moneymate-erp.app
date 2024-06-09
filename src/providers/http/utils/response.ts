/**
 * Serialize response object to custom type
 * @param response Response
 * @return T
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function responseSerializer<T = any>(
  response: Response,
  configs?: {
    customSerializer?: (response: Response) => Promise<T>;
  }
) {
  if (configs?.customSerializer) {
    return configs.customSerializer(response);
  }

  const data = await response.text();
  try {
    return JSON.parse(data) as unknown as T;
  } catch {
    return data as unknown as T;
  }
}
