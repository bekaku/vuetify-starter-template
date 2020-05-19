import { reactive, toRefs } from "@vue/composition-api";
export default function() {
  const state = reactive({
    responseMenus: [],
    error: null,
    fetching: false
  });

  //to be update fetch acl menu from server
  state.responseMenus = [
    {
      header: "Sub Header",
      pages: [
        {
          icon: "mdi-home",
          // title: i18n.tc('nav.dashboard'),
          title: "nav.dashboard",
          i18n: true,
          to: "/"
        },
        //Pages
        {
          title: "nav.pages",
          i18n: true,
          icon: "mdi-page-layout-sidebar-left",
          items: [
            {
              title: "nav.errors404",
              i18n: true,
              icon: "mdi-emoticon-sad",
              to: "/exception/error-404"
            },
            {
              title: "authen.login",
              i18n: true,
              icon: "mdi-login",
              to: "/auth/signin"
            },
            {
              icon: "mdi-account",
              title: "nav.user",
              i18n: true,
              to: "/pages/user"
            }
          ]
        },
        //Components
        {
          title: "nav.components",
          i18n: true,
          icon: "mdi-view-dashboard",
          items: [
            {
              title: "nav.buttons",
              i18n: true,
              icon: "mdi-minus",
              to: "/components/buttons"
            },
            {
              title: "nav.grids",
              i18n: true,
              icon: "mdi-grid",
              to: "/components/grids"
            },
            {
              title: "nav.icons",
              i18n: true,
              icon: "mdi-chart-bubble",
              to: "/components/icons"
            },

            {
              title: "nav.notifications",
              i18n: true,
              icon: "mdi-bell",
              to: "/components/notifications"
            },
            {
              title: "nav.tables",
              i18n: true,
              icon: "mdi-clipboard-outline",
              to: "/tables/regular-tables"
            },
            {
              title: "nav.tabs",
              i18n: true,
              icon: "mdi-tab",
              to: "/components/tabs"
            },
            {
              title: "nav.typography",
              i18n: true,
              icon: "mdi-format-font",
              to: "/components/typography"
            }
          ]
        },
        {
          title: "nav.maps",
          i18n: true,
          icon: "mdi-map-marker",
          to: "/maps/google-maps"
        },

        {
          title: "nav.themes",
          i18n: true,
          icon: "mdi-brush",
          to: "/settings/theme"
        }
      ]
    }
  ];
  return {
    ...toRefs(state)
  };
}
