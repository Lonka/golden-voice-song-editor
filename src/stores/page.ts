import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import type { pageNames } from '~/types/global'

export const usePageStore = defineStore('page', () => {
  const currentPageIndex = ref(-1)
  const pageQueryObject = ref({})
  function changePageTo(pageName: pageNames, queryObj?: object) {
    currentPageIndex.value = pageName
    if (queryObj)
      pageQueryObject.value = queryObj
  }

  return {
    currentPageIndex,
    changePageTo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
