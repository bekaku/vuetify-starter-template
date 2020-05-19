import { reactive, computed, toRefs } from "@vue/composition-api";
import {
  ACTION_SET_LANG,
  THEME,
  CURRENT_LANGUGE,
  CURRENT_USER,
  ACTION_SET_THEME
} from "@/store/const";
import { LocaleOptions, ThemeColors } from "@/plugins/config";
import { getCurrentTheme } from "@/plugins/util";
export default function (contextRoot) {
  const { $store, $i18n, $vuetify } = contextRoot;
  const state = reactive({
    localeOptions: LocaleOptions,
    drawer: computed(() => $store.state.drawer),
    currentLanguge: computed(() => $store.getters[CURRENT_LANGUGE]),
    currentUser: computed(() => $store.getters[CURRENT_USER]),
    currentTheme: computed(() =>
      $store.getters[THEME] ? $store.getters[THEME] : getCurrentTheme()
    ),
    ThemeColors
  });
  // Methods
  const setLanguge = lang => {
    if ($i18n.locale != lang) {
      $store.dispatch(ACTION_SET_LANG, lang);
    }
  };

  const setTheme = options => {
    $vuetify.theme.themes.dark.primary = options.color;
    $vuetify.theme.themes.light.primary = options.color;
    $vuetify.theme.dark = options.darkMode;

    $store.dispatch(ACTION_SET_THEME, options);
  };

  const setDrawer = drawer => $store.commit("SET_DRAWER", drawer);
  return { ...toRefs(state), setLanguge, setDrawer, setTheme };
}
