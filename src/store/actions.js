import { ACTION_SET_LANG, MUTATE_CHANGE_LANG, ACTION_SET_THEME_COLOR, MUTATE_SET_THEME_COLOR } from './storeConfig';
const actions = {
    [ACTION_SET_LANG]: ({ commit }, payload) => {
        commit(MUTATE_CHANGE_LANG, payload)
    },
    [ACTION_SET_THEME_COLOR]: ({ commit }, payload) => {
        commit(MUTATE_SET_THEME_COLOR, payload)
    },
}
export default actions