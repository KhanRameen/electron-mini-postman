import type { ApiResponseType } from "./api";

export {};
declare global {
  interface Window {
    api: {
      request: (ApiRequestType) => ApiResponseType;
    };
  }
}
