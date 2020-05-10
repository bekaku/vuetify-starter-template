import {CURRENT_LANGUGE, THEME} from './const';

const getters = {
  [CURRENT_LANGUGE]: state => state.currentLanguge,
  [THEME]: state => state.currentTheme,
}

export default getters