import { useIpcRenderer } from '@vueuse/electron'
const ipcRenderer = useIpcRenderer()
export const useSystem = () => {
  const exitApp = () => {
    ipcRenderer.send('exit-app')
  }
  return {
    exitApp,
  }
}
