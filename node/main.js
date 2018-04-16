const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      title: "Chem Calculator",
      //frame: false,
      show: false,
      backgroundColor: "#303030",
      "webPreferences":{
        "webSecurity":false
      }
    });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', () => {
  createWindow();
  mainWindow.show();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    app.commandLine.appendSwitch('ignore-gpu-blacklist');
    createWindow();
  }
})
