
import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'node:path';
import 'dotenv/config'

debugger;
const isDev = process.env.NODE_ENV === 'development';
const { PORT } = process.env || { PORT: 5173 };

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    win.loadURL(`http://localhost:${PORT}`);
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    // Loads the Vite build output
    win.loadFile(join(__dirname, '../dist/index.html'));
  }

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Example IPC handler
ipcMain.handle('app:getName', () => app.getName());
