import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const { locale } = useI18n()
    const lang = ref()
    watch(
      lang,
      (newLang) => {
        if (newLang) {
          locale.value = newLang
        }
      },
      { immediate: true },
    )

    function setLang(_lang: string) {
      lang.value = _lang
    }

    return { lang, setLang }
  },
  {
    persist: true,
  },
)
