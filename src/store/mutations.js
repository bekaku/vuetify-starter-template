import { MUTATE_CHANGE_LANG, MUTATE_SET_THEME } from './storeConfig';
import { LocalStorage } from '../plugins/config'
import app from '../main';
const mutations = {

    SET_BAR_IMAGE(state, payload) {
        state.barImage = payload
    },
    SET_DRAWER(state, payload) {
        state.drawer = payload
    },
    [MUTATE_CHANGE_LANG]: (state, payload) => {
        app.$i18n.locale = payload
        // app.$moment.locale(payload);
        app.$vuetify.lang.current = payload
        localStorage.setItem(LocalStorage.LANGUGE, payload)
        state.currentLanguge = payload;
    },
    [MUTATE_SET_THEME]:(state, payload)=> {
        state.currentTheme = payload;
        localStorage.setItem(LocalStorage.THEME, JSON.stringify(payload));
    },
}
export default mutations