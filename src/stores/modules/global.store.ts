import { ref } from 'vue'
import { defineStore } from 'pinia'

const useGlobalStore = defineStore('global', () => {
  // refs
  const loading = ref(true)

  // actions
  function setLoading(value: boolean) {
    loading.value = value
  }

  return {
    loading,
    setLoading
  }
})

export default useGlobalStore
