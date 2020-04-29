import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ven from 'vuetify/lib/locale/en'
import vth from 'vuetify/lib/locale/th'
// import th from "../locales/th.json";
// import en from "../locales/en.json";

import { getCurrentLocale } from './util'
Vue.use(VueI18n)

const messages = {
  en: {
    ...require('@/locales/en.json'),
    $vuetify: ven,
  },
  th: {
    ...require('@/locales/th.json'),
    $vuetify: vth,
  },
}
// const messages = { en: en, th:th };
const locale = getCurrentLocale()
export default new VueI18n({
  locale: locale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
