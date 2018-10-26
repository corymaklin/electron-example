const { app, BrowserWindow, ipcMain } = require('electron');

ipcMain.on('example', (event, arg) => {
    console.log(arg);
    event.sender.send('example', 'pong');
})

function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);