<template>
  <v-content>
    <v-breadcrumbs
      v-if="$route.meta.breadcrumb"
      :items="$route.meta.breadcrumb"
    >
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.i18n ? $t(item.text) : item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <router-view />
    <dashboard-core-footer />
  </v-content>
</template>

<script>
export default {
  name: "DashboardCoreView",

  components: {
    DashboardCoreFooter: () => import("./Footer")
  },
  computed: {
    appBgColor() {
      return !this.$vuetify.theme.dark ? "appContentBg" : "";
    }
  },
};
</script>
<style lang="scss">
.appContentBg {
  background-color: #fafafa !important;
}
</style>