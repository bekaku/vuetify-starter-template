// import i18n from '@/plugins/i18n';
export const AppMenus = () => {
    return [
        {
            header: 'Implement',
            pages: [
                {
                    icon: "mdi-view-dashboard",
                    // title: i18n.tc('nav.dashboard'),
                    title: 'nav.dashboard',
                    i18n: true,
                    to: "/"
                },
                {
                    icon: "mdi-account",
                    title: "user",
                    i18n: false,
                    to: "/pages/user"
                },
                {
                    title: "rtables",
                    i18n: false,
                    icon: "mdi-clipboard-outline",
                    to: "/tables/regular-tables"
                },
                {
                    title: "typography",
                    i18n: false,
                    icon: "mdi-format-font",
                    to: "/components/typography"
                },
                {
                    title: "icons",
                    i18n: false,
                    icon: "mdi-chart-bubble",
                    to: "/components/icons"
                },
                {
                    title: "google",
                    i18n: false,
                    icon: "mdi-map-marker",
                    to: "/maps/google-maps"
                },
                {
                    title: "notifications",
                    i18n: false,
                    icon: "mdi-bell",
                    to: "/components/notifications"
                },
                {
                    title: "signin",
                    i18n: false,
                    icon: "mdi-login",
                    to: "/auth/login"
                },
                {
                    title: "nav.colorTheme",
                    i18n: true,
                    icon: "mdi-brush",
                    to: "/settings/theme"
                }
            ]
        }
    ]
};