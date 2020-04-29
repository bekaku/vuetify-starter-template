import { ACTION_SET_LANG, MUTATE_CHANGE_LANG, ACTION_SET_THEME, MUTATE_SET_THEME } from './storeConfig';
const actions = {
    [ACTION_SET_LANG]: ({ commit }, payload) => {
        commit(MUTATE_CHANGE_LANG, payload)
    },
    [ACTION_SET_THEME]: ({ commit }, payload) => {
        commit(MUTATE_SET_THEME, payload)
    },
}
export default actions