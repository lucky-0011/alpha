import { createI18n } from 'vue-i18n'
import message from '@intlify/unplugin-vue-i18n/messages'

import en from './lang/en.json'

export type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'zh'>({
  legacy: false,
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: message as {
    'en': MessageSchema,
    'zh': MessageSchema,
  },
})

export default i18n

// const { t } = useI18n<{
//   message: MessageSchema,
// }>()


import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs'
dayjs.locale('zh-cn');
