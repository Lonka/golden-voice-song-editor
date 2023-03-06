import { app, ipcMain } from 'electron'

ipcMain.on('exit-app', (event) => {
  app.exit()
})
