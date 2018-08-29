const {app, BrowserWindow} = require('electron')
  
function createWindow () {
    win = new BrowserWindow({width: 500, height: 650})
    win.loadFile('./public/index.html')
    win.webContents.session.clearCache(function(){});
}

app.on('ready', createWindow)
