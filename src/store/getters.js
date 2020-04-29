import {CURRENT_LANGUGE, THEME_COLOR} from './storeConfig';

const getters = {
  [CURRENT_LANGUGE]: state => state.currentLanguge,
  [THEME_COLOR]: state => state.currentTheme,
}

export default getters