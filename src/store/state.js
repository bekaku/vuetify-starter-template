
import { LocalStorage, DefaultLocale, DefaultTheme } from '../plugins/config'
const state = {
    drawer: null,
    currentLanguge: localStorage.getItem(LocalStorage.LANGUGE) ? localStorage.getItem(LocalStorage.LANGUGE) : DefaultLocale,
    currentTheme: localStorage.getItem(LocalStorage.THEME) ? localStorage.getItem(LocalStorage.THEME) : DefaultTheme,
}
export default state