import { useIpcRenderer } from '@vueuse/electron'
import type { MenuItem } from '~/types/global'
const ipcRenderer = useIpcRenderer()
export const useDataObjectAccess = () => {
  const getMenus = (): MenuItem[] | null => {
    const ret = ipcRenderer.sendSync<MenuItem[]>('get-menus')
    if (ret.value)
      return ret.value
    return null
  }
  return {
    getMenus,
  }
}
