import { customFetch, FetchFactoryConfig, mockFetch } from "./client";

export function factoryHttp(config?: FetchFactoryConfig) {
  return {
    get: customFetch("GET", config),
    post: customFetch("POST", config),
    put: customFetch("PUT", config),
    patch: customFetch("PATCH", config),
    delete: customFetch("DELETE", config),
  };
}

export type Http = ReturnType<typeof factoryHttp>;

interface FactoryHttpMockParams {
  mockURL: string;
}

export function factoryHttpMock({ mockURL }: FactoryHttpMockParams) {
  return {
    get: mockFetch("GET", mockURL),
    post: mockFetch("POST", mockURL),
    put: mockFetch("PUT", mockURL),
    patch: mockFetch("PATCH", mockURL),
    delete: mockFetch("DELETE", mockURL),
  } as Http;
}
