
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getAppName: () => ipcRenderer.invoke('app:getName')
});
