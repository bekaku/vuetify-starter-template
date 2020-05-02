<template>
<!-- :color="currentTheme.barDark ? 'white' : undefined" -->
  <v-navigation-drawer
  id="core-navigation-drawer"
    v-model="drawer"
    :color="currentTheme.barImageShow && !$vuetify.theme.dark ? 'white' : (currentTheme.barDark && !$vuetify.theme.dark ? currentTheme.color : undefined)"
    :dark="currentTheme.barDark || $vuetify.theme.dark"
    :expand-on-hover="currentTheme.barExpandOnHover"
    :right="$vuetify.rtl"
    :src="!$vuetify.theme.dark && currentTheme.barImageShow ? currentTheme.barImage : ''"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="
          !$vuetify.theme.dark && currentTheme.barImageShow && currentTheme.barColor
            ? currentTheme.barColor
            : undefined
        "
        v-bind="props"
      />
    </template>

    <v-list dense nav class="py-0">
      <v-list-item two-line class="px-0">
        <v-list-item-avatar>
          <v-icon>mdi-vimeo</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div v-for="parentItem in menuItems" :key="parentItem.header">
        
        <v-subheader
          v-if="!currentTheme.barExpandOnHover && parentItem.header"
          class="pl-3 py-4 subtitle-1 text-uppercase"
          >{{ parentItem.header }}</v-subheader
        >
        <v-list-item
          v-for="(item, i) in parentItem.pages"
          :key="`drawer-item-${i}`"
          link
          class="mb-0"
          router
          :to="item.to"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.i18n ? $t(item.title) : item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider class="mt-2 mb-2"></v-divider>
    </v-list>

    <template v-slot:append>
      <base-item
        :item="{
          title: $t('base.setting'),
          icon: 'mdi-package-up',
          to: '/upgrade'
        }"
      />
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapGetters } from "vuex";
// import  i18n  from '@/plugins/i18n';
import { getCurrentTheme } from "@/plugins/util";
import { AppMenus } from "@/plugins/menu";
import { THEME } from "@/store/storeConfig";
export default {
  name: "DashboardCoreDrawer",
  data: () => ({}),

  computed: {
    ...mapGetters({
      theme: THEME
    }),
    currentTheme() {
      return this.theme ? this.theme : getCurrentTheme();
    },
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      }
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t("avatar")
      };
    },
    menuItems() {
      return AppMenus();
    }
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title)
      };
    }
  }
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        // margin-right: 24px
        // margin-left: 12px !important

      +rtl()
        // margin-left: 24px
        // margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>
