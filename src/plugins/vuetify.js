import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/plugins/i18n'
import '@/sass/overrides.sass'
import { getCurrentTheme } from './util'
Vue.use(Vuetify)
const currentTheme = getCurrentTheme()
const theme = {
  primary: currentTheme.color ? currentTheme.color : '#00D1B2',
  secondary: '#424242',
  accent: '#3273DC',
  error: '#FF3860',
  info: '#209CEE',
  success: '#23D160',
  warning: '#FF9F43',
  anchor: '#8c9eff',
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    dark : currentTheme.darkMode,
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
