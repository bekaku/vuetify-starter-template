import {CURRENT_LANGUGE, THEME} from './storeConfig';

const getters = {
  [CURRENT_LANGUGE]: state => state.currentLanguge,
  [THEME]: state => state.currentTheme,
}

export default getters