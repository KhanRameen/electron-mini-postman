import { ApiRequestType, ResponseDataType } from "../types/api.ts";

export async function sendRequest({
  url,
  method,
  headers,
  body,
}: ApiRequestType): Promise<ResponseDataType> {
  try {
    const res = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const responseBody = await res.json().catch(() => res.text());
    return {
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(res.headers.entries()),
      body: responseBody,
    };
  } catch (err: unknown) {
    return {
      status: 0,
      statusText: "Connection error or The client closed the request",
      headers: {},
      body: err instanceof Error ? err.message : "No Response",
    };
  }
}
