import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// import i18n from '@/plugins/i18n'
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/App'),
      children: [
        // Dashboard
        {
          name: 'App',
          path: '',
          component: () => import('@/views/App/Dashboard'),
          meta: {
            breadcrumb: [
              // { text: 'nav.dashboard', href: '/', disabled: false, i18n: true },
              { text: 'nav.dashboard', href: '', disabled: true, i18n: true },
            ],
            pageTitle: { text: 'nav.dashboard', i18n: true },
          }
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/App/pages/UserProfile'),
          meta: {
            breadcrumb: [
              { text: 'nav.dashboard', href: '/', disabled: false, i18n: true },
              { text: 'nav.appUser', href: '', disabled: true, i18n: true },
            ],
            pageTitle: { text: 'nav.appUser', i18n: true },
          }
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/App/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/App/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/App/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/App/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/App/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/App/Upgrade'),
        },
        //setting
        {
          name: 'Theme Settings',
          path: 'settings/theme',
          component: () => import('@/views/App/settings/Theme'),
          meta: {
            breadcrumb: [
              { text: 'nav.dashboard', href: '/', disabled: false, i18n: true },
              { text: 'nav.colorTheme', href: '', disabled: true, i18n: true },
            ],
            pageTitle: { text: 'nav.colorTheme', i18n: true },
          }
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/views/Layout/Full'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/auth/login',
          name: 'authen-login',
          component: () => import('@/views/Auth/Login.vue')
        },
        {
          path: '/exception/error-404',
          name: 'exception-error-404',
          component: () => import('@/views/Exception/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/exception/error-404'
    }
  ],
})
