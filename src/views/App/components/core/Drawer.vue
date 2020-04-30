<template>
  <!-- <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  > -->
  <!-- <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :color="!$vuetify.theme.dark ? 'white' : ''"
    :dark="$vuetify.theme.dark"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="$vuetify.theme.dark ? barImage : ''"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  > -->
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :color="currentTheme.barDark || $vuetify.theme.dark ? 'white' : undefined"
    :dark="currentTheme.barDark || $vuetify.theme.dark"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="$vuetify.theme.dark || currentTheme.barDark ||currentTheme.barImageShow ? currentTheme.barImage : ''"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="currentTheme.barColor ? currentTheme.barColor : undefined"
        v-bind="props"
      />
      <!-- <v-img
        :gradient="currentTheme.barDark || $vuetify.theme.dark ? currentTheme.barColor : `to bottom, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)`"
        v-bind="props"
      /> -->
      <!-- <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      /> -->
    </template>

    <v-list nav>
      <v-list-item>
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-icon color="primary">mdi-vimeo</v-icon>
          <!-- <v-img
            src="https://cdn.appedr.com/img/circle-blue.png"
            contain
          /> -->

        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="display-1"
            v-text="$t('app.name')"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list nav>
      <div />

      <div
        v-for="parentItem in menuItems"
        :key="parentItem.header"
      >
        <v-subheader
          v-if="parentItem.header"
          class="pl-3 py-4 subtitle-1 text-uppercase"
        >{{ parentItem.header }}</v-subheader>
        <v-list-item
          v-for="(item, i) in parentItem.pages"
          :key="item.title"
          link
          class="mb-0"
          router
          :to="item.to"
          exact
        >
          <v-list-item-icon v-if="parentItem.header !== 'Subscriptions'">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-avatar
            v-else
            class="mr-5"
          >
            <img :src="`https://randomuser.me/api/portraits/men/${i}.jpg`" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class=" font-weight-medium subtitle-2">
              {{item.i18n ? $t(item.title) : item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider class="mt-2 mb-2"></v-divider>
      <div />
    </v-list>

    <!-- <v-list
      dense
      nav
    >
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
        </base-item-group>
        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>
      <div />
    </v-list> -->

    <template v-slot:append>
      <base-item :item="{
          title: $t('upgrade'),
          icon: 'mdi-package-up',
          to: '/upgrade',
        }" />
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
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },

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
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

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
