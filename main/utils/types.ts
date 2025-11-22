export interface ApiRequestType {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers: Record<string, string>;
  body?: any;
}
export interface ApiResponseType {
  success: boolean;
  status: number;
  message: string;
  data: any;
  headers: Record<string, string> | {};
}
