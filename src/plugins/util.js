import {
    DefaultLocale, LocaleOptions, LocalStorage, DefaultTheme, PoroductionMode
} from './config';
const sha512 = require("js-sha512");
export const vLog = (txt, tag = null) => {
    if (!PoroductionMode) {
        if (tag != null) {
            console.log(tag + ':');
        }
        console.log(txt);
    }

};
export const vConsole = (txt, level = 'info', tag = null) => {//info, error, warn
    if (!PoroductionMode) {
        if (tag != null) {
            console.log(tag + ':');
        }

        if (level == 'error') {
            console.error(txt);
        } else if (level == 'warn') {
            console.warn(txt);
        } else {
            console.log(txt);
        }
    }

};
//getQueryParam('#', 'page');
export const getCharpQueryParam = (type, paramName) => {

    let uri = window.location.href.split(type);
    if (uri.length == 2) {
        let vars = uri[1].split('&');
        let tmp = "";
        for (let v of vars) {
            tmp = v.split(paramName + '=');
            if (tmp.length === 2) {
                return tmp[1];
            }
        }
    }
};

export const isNumerric = (input) => {
    return (input - 0) == input && ('' + input).trim().length > 0;
};
export const isEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
export const getCurrentTheme = () => {
    return localStorage.getItem(LocalStorage.THEME) ? JSON.parse(localStorage.getItem(LocalStorage.THEME)) : DefaultTheme;
};

export const convertToLink = (inputText, isWhite) => {

    const color = isWhite ? 'text-color-white v-link-underline' : '';
    let replacedText, replacePattern1, replacePattern2, replacePattern3;
    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;/* eslint-disable-line */
    replacedText = inputText.replace(replacePattern1, '<a class="link external ' + color + '" href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;/* eslint-disable-line */
    replacedText = replacedText.replace(replacePattern2, '$1 <a class="link external ' + color + '" href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;/* eslint-disable-line */
    replacedText = replacedText.replace(replacePattern3, '<a class="link external ' + color + '" href="mailto:$1">$1</a>');

    return replacedText;
};
export const roundDecimal = (value, precision) => {
    const multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
}
export const getCurrentUser = () => {
    return new Promise(resolve => {
        const userData = localStorage.getItem(LocalStorage.USER) != null ? JSON.parse(localStorage.getItem(LocalStorage.USER)) : null;
        resolve(userData);
    })
};
export const getCurrentLocale = () => {
    return (localStorage.getItem(LocalStorage.LANGUGE) && LocaleOptions.filter(x => x.id == localStorage.getItem(LocalStorage.LANGUGE)).length > 0) ? localStorage.getItem(LocalStorage.LANGUGE) : DefaultLocale
}
export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//chart
export const getApexChartThemeMode = () => {
    const theme = getCurrentTheme();
    return theme && theme.darkMode ? 'dark' : 'light'
};
export const getApexChartThemeBgMode = () => {
    const theme = getCurrentTheme();
    return theme && theme.darkMode ? '#1c1c1d' : '#fff'
};
export const getApexChartThemeGridMode = () => {
    const theme = getCurrentTheme();
    return theme && theme.darkMode ? '#353537' : '#e9ebec'
};
export const hashSha512 = (txt) => {
    return new Promise(resolve => {

        if (txt) {
            const hash = sha512(txt);
            resolve(hash);
        }
        resolve(null)

    })
};
export const isJson = (json) => {
    const t = typeof json;
    return ['boolean', 'number', 'string', 'symbol', 'function'].indexOf(t) == -1;
}
