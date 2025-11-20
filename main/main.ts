import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

const _fileName = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_fileName);

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    webPreferences: {
      preload: path.join(_dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: true,
      sandbox: false,
    },
  });
  win.loadURL("https://localhost:5173");
}

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();
});
