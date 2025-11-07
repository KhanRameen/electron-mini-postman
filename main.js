import { app, BrowserWindow } from 'electron'

const createWindow = () => {

    const win = new BrowserWindow({
        //creates and manages app window
        width: 800,
        height: 600
    })
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow() //load webpage into a new BrowserWindow
}
)