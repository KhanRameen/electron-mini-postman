import { contextBridge, ipcRenderer } from "electron";
import { ApiRequestType } from "./utils/types";

contextBridge.exposeInMainWorld("api", {
  request: (options: ApiRequestType) =>
    ipcRenderer.invoke("api-request", options),
});
