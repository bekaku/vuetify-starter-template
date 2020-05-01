<template>
  <v-content>
    <breadcrumb/>
    <router-view />
    <dashboard-core-footer />
  </v-content>
</template>

<script>
export default {
  name: "DashboardCoreView",

  components: {
    DashboardCoreFooter: () => import("./Footer"),
    Breadcrumb: () => import("./Breadcrumb"),
  },
  computed: {
    appBgColor() {
      return !this.$vuetify.theme.dark ? "appContentBg" : "";
    }
  }
};
</script>
<style lang="scss">
.appContentBg {
  background-color: #fafafa !important;
}
</style>
