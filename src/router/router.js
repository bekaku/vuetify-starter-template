import Vue from "vue";
import Router from "vue-router";
import AuthRequired from "./authRequired";

Vue.use(Router);
// import i18n from '@/plugins/i18n'
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/App"),
      beforeEnter: AuthRequired,
      children: [
        // Dashboard
        {
          name: "App",
          path: "",
          component: () => import("@/views/App/Dashboard"),
          meta: {
            breadcrumb: [
              // { text: 'nav.dashboard', href: '/', disabled: false, i18n: true },
              { text: "nav.dashboard", href: "", disabled: true, i18n: true }
            ],
            pageTitle: { text: "nav.dashboard", i18n: true }
          }
        },
        // Pages
        {
          name: "User Profile",
          path: "pages/user",
          component: () => import("@/views/App/pages/UserProfile"),
          meta: {
            breadcrumb: [
              { text: "nav.dashboard", href: "/", disabled: false, i18n: true },
              { text: "nav.appUser", href: "", disabled: true, i18n: true }
            ],
            pageTitle: { text: "nav.appUser", i18n: true }
          }
        },
        {
          name: "Notifications",
          path: "components/notifications",
          component: () => import("@/views/App/component/Notifications")
        },
        {
          name: "Icons",
          path: "components/icons",
          component: () => import("@/views/App/component/Icons")
        },
        {
          name: "Typography",
          path: "components/typography",
          component: () => import("@/views/App/component/Typography")
        },
        {
          name: "Buttons",
          path: "components/buttons",
          component: () => import("@/views/App/component/Buttons")
        },
        {
          name: "Grids",
          path: "components/grids",
          component: () => import("@/views/App/component/Grid")
        },
        {
          name: "Tabs",
          path: "components/tabs",
          component: () => import("@/views/App/component/Tabs")
        },
        // Tables
        {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: () => import("@/views/App/tables/RegularTables")
        },
        // Maps
        {
          name: "Google Maps",
          path: "maps/google-maps",
          component: () => import("@/views/App/maps/GoogleMaps")
        },
        //setting
        {
          name: "Theme Settings",
          path: "settings/theme",
          component: () => import("@/views/App/settings/Theme"),
          meta: {
            breadcrumb: [
              { text: "nav.dashboard", href: "/", disabled: false, i18n: true },
              { text: "nav.themes", href: "", disabled: true, i18n: true }
            ],
            pageTitle: { text: "nav.themes", i18n: true }
          }
        }
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/views/Layout/Full"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/auth/signin",
          name: "authen-signin",
          component: () => import("@/views/Auth/Signin.vue")
        },
        {
          path: "/exception/error-404",
          name: "exception-error-404",
          component: () => import("@/views/Exception/Error404.vue")
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/exception/error-404"
    }
  ]
});
