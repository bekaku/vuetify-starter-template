<template>
  <!-- :color="currentTheme.barDark ? 'white' : undefined" -->
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :color="
      currentTheme.barImageShow && !$vuetify.theme.dark
        ? 'white'
        : currentTheme.barDark && !$vuetify.theme.dark
        ? currentTheme.color
        : undefined
    "
    :dark="currentTheme.barDark || $vuetify.theme.dark"
    :expand-on-hover="currentTheme.barExpandOnHover"
    :right="$vuetify.rtl"
    :src="
      !$vuetify.theme.dark && currentTheme.barImageShow
        ? currentTheme.barImage
        : ''
    "
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="
          !$vuetify.theme.dark &&
          currentTheme.barImageShow &&
          currentTheme.barColor
            ? currentTheme.barColor
            : undefined
        "
        v-bind="props"
      />
    </template>

    <v-list dense>
      <v-list-item two-line class="px-0">
        <v-list-item-avatar>
          <v-icon>mdi-vimeo</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ $t("app.name") }}</v-list-item-title>
          <v-list-item-subtitle>{{ $t("app.fullName") }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div v-for="groupItem in menuItems" :key="groupItem.header">
        <v-subheader
          v-if="!currentTheme.barExpandOnHover && groupItem.header"
          class="pl-3 py-4 subtitle-1 text-uppercase"
          >{{ groupItem.header }}</v-subheader
        >
        <template v-for="(parentItem, i) in groupItem.pages">
          <template v-if="parentItem.items">
            <v-list-group
              :key="`parent-${i}-${parentItem.title}`"
              :prepend-icon="parentItem.icon"
              no-action
              :color="
                currentTheme.barDark || $vuetify.theme.dark ? 'white' : ''
              "
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="parentItem.i18n ? $t(parentItem.title) : parentItem.title "
                  ></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(subItem, subI) in parentItem.items"
                :key="`parent-${i}-drawer-item-${subI}`"
                link
                :to="subItem.to"
              >
                <v-list-item-action v-if="subItem.icon">
                  <v-icon>{{ subItem.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ subItem.i18n ? $t(subItem.title) : subItem.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item
              :key="`drawer-item-${i}`"
              link
              class="mb-0"
              router
              :to="parentItem.to"
              exact
            >
              <v-list-item-icon>
                <v-icon>{{ parentItem.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{
                    parentItem.i18n ? $t(parentItem.title) : parentItem.title
                  }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </div>
    </v-list>

    <template v-slot:append v-if="!currentTheme.barExpandOnHover">
      <v-row no-gutters class="my-5">
        <v-col cols="8" class="pl-1"
          ><v-text-field
            hide-details
            :placeholder="$t('base.search')"
            filled
            rounded
            dense
            prepend-inner-icon="mdi-magnify"
          ></v-text-field
        ></v-col>
        <v-col cols="4" class="text-center ">
          <v-btn icon class="mr-1">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-navigation-drawer>
</template>

<script>
import useSiteSetting from "@/composition/UseSiteSetting";
import useMenuApi from "@/composition/UseMenuApi";
import { defineComponent, computed } from "@vue/composition-api";
export default defineComponent({
  name: "CoreDrawer",
  setup(props, { root }) {
    const { $store } = root;
    const { currentTheme, setDrawer } = useSiteSetting(root);
    const { responseMenus } = useMenuApi();
    const drawer = computed({
      get: () => $store.state.drawer,
      set: val => {
        setDrawer(val);
      }
    });

    return { currentTheme, drawer, menuItems: responseMenus };
  }
});
</script>
