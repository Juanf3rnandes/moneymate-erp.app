export type HttpStatus =
  | 200
  | 201
  | 204
  | 301
  | 307
  | 308
  | 400
  | 401
  | 403
  | 404
  | 405
  | 418
  | 500
  | 501
  | 502
  | 503
  | 507;

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS";

export interface HttpResponse<T = unknown> {
  status: HttpStatus;
  message: string;
  results: T;
}

export interface HttpConfig {
  mockURL?: string;
  localMode?: boolean;
  tokenSerializer?: (
    accessToken: string | undefined,
    erpToken: string | undefined
  ) => (url: string) => string;
}
