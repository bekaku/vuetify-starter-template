<template>
  <v-app-bar
    id="app-bar"
    app
    :color="
      currentTheme.navDark && !$vuetify.theme.dark
        ? currentTheme.color
        : (!$vuetify.theme.dark ? 'white' : '')
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

    <!-- <v-text-field :label="$t('base.search')" color="secondary" hide-details>
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
        <v-btn class="mt-n2" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field> -->
    <v-text-field hide-details
            :placeholder="$t('base.search')"
           filled
            rounded
            dense
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" icon to="/">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <!-- Languge  -->
    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-translate</v-icon>
          {{ currentLanguge }}
        </v-btn>
      </template>

      <v-list :tile="false">
        <v-list-item
          v-for="(l, i) in LocaleOptions"
          :key="`lacales-${i}`"
          @click="updateLocale(l.id)"
        >
          <v-list-item-title v-text="l.name" />
          <v-list-item-icon>
            <v-icon v-if="currentLanguge == l.id">mdi-check</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
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
        <v-btn icon v-on="on">
          <v-avatar depressed size="36px">
            <img
              src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/s960x960/93841626_3211504378913659_8368286881930018816_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeEgZaAfNvIPNGSsg7XojvQpQWFwliA533VBYXCWIDnfddcJOyVLT3z4K36dd6zT1XbI4n4M9OYfU5ev3-C86Lwa&_nc_ohc=l6kjpuLUPc8AX_oiFs-&_nc_ht=scontent.fbkk8-3.fna&_nc_tp=7&oh=d07f410957c7e0b61fab785a1a8bdce2&oe=5ECD414A"
              alt="John"
            />
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              :src="
                `https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/s960x960/93841626_3211504378913659_8368286881930018816_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeEgZaAfNvIPNGSsg7XojvQpQWFwliA533VBYXCWIDnfddcJOyVLT3z4K36dd6zT1XbI4n4M9OYfU5ev3-C86Lwa&_nc_ohc=l6kjpuLUPc8AX_oiFs-&_nc_ht=scontent.fbkk8-3.fna&_nc_tp=7&oh=d07f410957c7e0b61fab785a1a8bdce2&oe=5ECD414A`
              "
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Tech Reagan</v-list-item-title>
            <v-list-item-subtitle>techreagan@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router to="/channels/10">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Your channel</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/studio">
          <v-list-item-icon>
            <v-icon>mdi-youtube-studio</v-icon>
          </v-list-item-icon>
          <v-list-item-title>VueTube Studio</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/signin">
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
// Utilities
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { LocaleOptions } from "@/plugins/config";
import { getCurrentTheme } from "@/plugins/util";
import { CURRENT_LANGUGE, ACTION_SET_LANG, THEME } from "@/store/storeConfig";
export default {
  name: "DashboardCoreAppBar",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    LocaleOptions,
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]
  }),

  computed: {
    ...mapState(["drawer"]),
    ...mapGetters({
      currentLanguge: CURRENT_LANGUGE,
      theme: THEME
    }),
    currentTheme() {
      return this.theme ? this.theme : getCurrentTheme();
    }
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    }),
    ...mapActions({
      setLang: ACTION_SET_LANG
    }),
    updateLocale(locale) {
      const currentLocale = this.$i18n.locale;
      if (currentLocale != locale) {
        this.setLang(locale);
      }
    }
  }
};
</script>
