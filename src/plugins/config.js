import axios from "axios";

export const AppPrefix = "vee_theme";
export const AppVersion = "1.0.0";
export const CodeVersion = 1;
export const PoroductionMode = false;
export const DefaultLocale = process.env.VUE_APP_I18N_LOCALE;
export const LocaleOptions = [
  { id: "en", name: "English" },
  { id: "th", name: "ไทย" }
];
export const DefaultTheme = {
  color: "#28C76F",
  darkMode: false,
  barColor: "to bottom, #0ba360 0%, #3cba92 100%",
  barImage:
    "https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  barDark: true,
  barImageShow: true,
  barExpandOnHover: false,
  navDark: false
};
export const ThemeColors = [
  "#008bf2",
  "#7367F0",
  "#02C39A",
  "#ff5e3a",
  "#28C76F",
  "#EA5455",
  "#FF2768",
  "#FFD60A",
  "#FF9F43",
  "#3B295D",
  "#5BC0EB",
  "#A5BE00",
  "#b8c2cc"
];

export const LocalStorage = {
  USER: `${AppPrefix}_user`,
  LANGUGE: `${AppPrefix}_languge`,
  THEME: `${AppPrefix}_theme`
};
// export const DefaultApiEndpoint = PoroductionMode ? 'https://demo.appedr.com/grand-center' : 'http://localhost/grandats_project/grand-center';
export const DefaultApiEndpoint = "https://jsonplaceholder.typicode.com";
export const ApiClient = "default";
export const DefaultAxiosHeader = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=UTF-8",
  "X-Locale": localStorage.getItem(LocalStorage.LANGUGE)
    ? localStorage.getItem(LocalStorage.LANGUGE)
    : DefaultLocale,
  "Code-Version": CodeVersion,
  apiClient: ApiClient,
  Authorization: ""
};
export const DefaultAxios = axios.create({
  baseURL: DefaultApiEndpoint,
  withCredentials: false,
  headers: DefaultAxiosHeader,
  timeout: 60 * 1000
});
export const MultipartAxios = axios.create({
  baseURL: DefaultApiEndpoint,
  headers: DefaultAxiosHeader,
  timeout: 60 * 1000
});
export const TimeIntervalConfig = PoroductionMode ? 5 * 60 * 1000 : 30 * 1000; //production 5*60*1000   5 minute
export const AxiosMethod = { GET: 1, POST: 2, PUT: 3, DELETE: 4 };
