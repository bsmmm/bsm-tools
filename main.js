const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
app.whenReady().then(() => {
  const w = new BrowserWindow({
    width: 1000, height: 750, autoHideMenuBar: true,
    title: 'CheatGames',
    icon: path.join(__dirname, 'icon.ico')
  });
  w.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  w.loadFile('index.html');
});
app.on('window-all-closed', () => app.quit());