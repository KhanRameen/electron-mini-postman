import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  ipcMain.handle("ping", () => "pong");
  createWindow();
});
