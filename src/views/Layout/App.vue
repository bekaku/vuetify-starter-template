<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

    <!-- <dashboard-core-settings /> -->
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('../App/components/core/AppBar'),
      DashboardCoreDrawer: () => import('../App/components/core/Drawer'),
      // DashboardCoreSettings: () => import('../App/components/core/Settings'),
      DashboardCoreView: () => import('../App/components/core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
