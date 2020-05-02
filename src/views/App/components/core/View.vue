<template>
  <v-content>
    <core-breadcrumb/>
    <router-view />
    <core-footer />
  </v-content>
</template>

<script>
export default {
  name: "DashboardCoreView",

  components: {
    CoreFooter: () => import("./Footer"),
    CoreBreadcrumb: () => import("./Breadcrumb"),
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
