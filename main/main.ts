import axios, { AxiosRequestConfig, Method } from "axios";
import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ApiResponseType, ApiRequestType } from "./utils/types";

const _fileName = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_fileName);

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    webPreferences: {
      preload: path.join(_dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: true,
      sandbox: false,
    },
  });
  win.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "renderer/index.html")}`
  );
}

app.whenReady().then(() => {
  ipcMain.handle(
    "api-request",
    async (_event, options: ApiRequestType): Promise<ApiResponseType> => {
      try {
        const config: AxiosRequestConfig = {
          url: options.url as string,
          method: options.method as Method,
          headers: options.headers as Record<string, string>,
          data: options.body,
        };
        const response = await axios(config);

        return {
          success: true,
          status: response.status,
          message: response.statusText,
          data: response.data,
          headers: response.headers,
        };
      } catch (err: any) {
        return {
          success: false,
          status: err.response?.status ?? 500,
          message: err.message,
          data: err.response?.data,
          headers: err.respone?.headers,
        };
      }
    }
  );

  createWindow();
});
