<template>
  <v-app-bar
    id="app-bar"
    app
    :color="
      currentTheme.navDark && !$vuetify.theme.dark
        ? currentTheme.color
        : !$vuetify.theme.dark
        ? 'white'
        : ''
    "
    :dark="currentTheme.navDark || $vuetify.theme.dark"
    flat
    height="75"
  >
    <v-btn class="mr-3" icon @click="setDrawer(!drawer)">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-menu
      </v-icon>
    </v-btn>

    <!-- <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="
        $route.meta.pageTitle
          ? $route.meta.pageTitle.i18n
            ? $t($route.meta.pageTitle.text)
            : $route.meta.pageTitle.text
          : $route.name
      "
    /> -->
    <v-spacer />
    <v-text-field
      hide-details
      :placeholder="$t('base.search')"
      filled
      rounded
      dense
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-spacer />

    <v-btn class="ml-2" min-width="0" icon to="/">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <!-- Languge  -->
    <core-locale />
    <!-- End  -->

    <!-- Notification  -->
    <v-menu bottom left offset-y origin="top right">
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" icon v-bind="attrs" v-on="on">
          <v-badge color="error" overlap>
            <template v-slot:badge>
              <span>5</span>
            </template>

            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list dense class="py-0">
        <v-list-item
          two-line
          v-for="(n, i) in notifications"
          :key="`notifications-${i}`"
          href="/"
        >
          <v-list-item-avatar>
            <v-img
              :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Bekaku</v-list-item-title>
            <v-list-item-subtitle v-text="n" />
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list-item class="mt-1" href="/">
          <v-list-item-content class="text-center">
            <v-list-item-title class="primary--text">More</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- End  -->

    <!-- User Avatar  -->
    <v-menu offset-y left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="mr-5">
          <v-avatar depressed size="36px">
            <img
              :src="currentUser.picture.thumbnail"
              :alt="currentUser.name.first"
            />
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="currentUser.picture.thumbnail" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              `${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ currentUser.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/setting">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Setting</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/auth/signin">
          <v-list-item-icon>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sign out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- End  -->

    <!-- <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/pages/user"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
import useSiteSetting from "@/composition/UseSiteSetting";
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "CoreAppBar",

  components: {
    CoreLocale: () => import("@/views/App/components/core/Locale")
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { root }) {
    const {
      currentTheme,
      drawer,
      currentUser,
      setDrawer
    } = useSiteSetting(root);
    const notifications = ref([
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]);

    return {
      currentTheme,
      drawer,
      currentUser,
      setDrawer,
      notifications
    };
  }
});
</script>
