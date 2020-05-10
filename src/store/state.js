
import { LocalStorage, DefaultLocale } from '../plugins/config'
const state = {
    drawer: true,
    currentLanguge: localStorage.getItem(LocalStorage.LANGUGE) ? localStorage.getItem(LocalStorage.LANGUGE) : DefaultLocale,
    currentTheme: undefined,
}
export default state