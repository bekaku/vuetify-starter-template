import { reactive, toRefs } from "@vue/composition-api";
export default function() {
  const state = reactive({
    responseMenus: [],
    error: null,
    fetching: false
  });

  //to be update fetch acl menu fromt server
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
        //Authenthication
        {
          title: "Pages",
          i18n: false,
          icon: "mdi-page-layout-sidebar-left",
          items: [
            {
              title: "Error404",
              i18n: false,
              icon: "mdi-emoticon-sad",
              to: "/exception/error-404"
            },
            {
              title: "Signin",
              i18n: false,
              icon: "mdi-login",
              to: "/auth/signin"
            },
            {
              icon: "mdi-account",
              title: "User",
              i18n: false,
              to: "/pages/user"
            }
          ]
        },
        //Components
        {
          title: "Components",
          i18n: false,
          icon: "mdi-view-dashboard",
          items: [
            {
              title: "buttons",
              i18n: false,
              icon: "mdi-minus",
              to: "/components/buttons"
            },
            {
              title: "grids",
              i18n: false,
              icon: "mdi-grid",
              to: "/components/grids"
            },
            {
              title: "icons",
              i18n: false,
              icon: "mdi-chart-bubble",
              to: "/components/icons"
            },

            {
              title: "notifications",
              i18n: false,
              icon: "mdi-bell",
              to: "/components/notifications"
            },
            {
              title: "rtables",
              i18n: false,
              icon: "mdi-clipboard-outline",
              to: "/tables/regular-tables"
            },
            {
              title: "tabs",
              i18n: false,
              icon: "mdi-tab",
              to: "/components/tabs"
            },
            {
              title: "typography",
              i18n: false,
              icon: "mdi-format-font",
              to: "/components/typography"
            }
          ]
        },
        {
          title: "Google map",
          i18n: false,
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
