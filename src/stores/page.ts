import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const usePageStore = defineStore('page', () => {
  /**
     * Current name of the page.
     */
  const currentPageName = ref('')
  /**
     * Changes the current name of the page
     * before.
     *
     * @param name - new name to set
     */
  function setNewPageName(name: string) {
    currentPageName.value = name
  }

  return {
    setNewPageName,
    currentPageName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
