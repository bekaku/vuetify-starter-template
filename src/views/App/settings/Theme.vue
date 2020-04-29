<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-card
          class="text-center mb-0"
          v-if="themeSettings"
        >
          <v-card-text>
            <div>
              <code class="text-left">
                {{themeSettings}}
              </code>
            </div>
            <strong class="mb-3 d-inline-block">SIDEBAR FILTERS</strong>

             <v-item-group v-model="themeSettings.color">
              <v-item
                v-for="color in colors"
                :key="color"
                :value="color"
              >
                <template v-slot="{ active, toggle }">
                  <v-avatar
                    :class="active && 'v-settings__item--active'"
                    :color="color"
                    class="v-settings__item"
                    size="25"
                    @click="toggle"
                  />
                </template>
              </v-item>
            </v-item-group> 


            <v-divider class="my-4 secondary" />

            <v-row
              align="center"
              no-gutters
            >
              <v-col cols="auto">
                Dark Mode
              </v-col>

              <v-spacer />

              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.darkMode"
                  class="ma-0 pa-0"
                  color="secondary"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-divider class="my-4 secondary" />

            <v-row
              align="center"
              no-gutters
            >
              <v-col cols="auto">
                Sidebar Image
              </v-col>

              <v-spacer />

              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.barImageShow"
                  class="ma-0 pa-0"
                  color="secondary"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-divider class="my-4 secondary" />

            <strong class="mb-3 d-inline-block">IMAGES</strong>

            <v-item-group
              v-model="themeSettings.barImage"
              class="d-flex justify-space-between mb-3"
            >
              <v-item
                v-for="image in images"
                :key="image"
                :value="image"
                class="mx-1"
              >
                <template v-slot="{ active, toggle }">
                  <v-sheet
                    :class="active && 'v-settings__item--active'"
                    class="d-inline-block v-settings__item"
                    @click="toggle"
                  >
                    <v-img
                      :src="image"
                      height="100"
                      width="50"
                    />
                  </v-sheet>
                </template>
              </v-item>
            </v-item-group>

            <v-btn
              block
              class="mb-3"
              color="success"
              @click="onApplyTheme"
              default
              rel="noopener"
            >
              Apply
            </v-btn>

          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
// Mixins
import { mapActions, mapGetters } from "vuex";
import { ThemeColors } from "@/plugins/config";
import { MUTATE_SET_THEME_COLOR, THEME_COLOR } from "@/store/storeConfig";
// import { getCurrentTheme } from '@/plugins/util'
export default {
  name: "DashboardCoreSettings",
  data: () => ({
    color: "#E91E63",
    colors: ThemeColors,
    image:
      "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
    images: [
      "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
      "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg",
      "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg",
      "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg"
    ],
    menu: false,
    saveImage: "",
    showImg: true,
    // themeSettings: {}
  }),
  mounted() {
    //   const currentTheme =this.storeTheme;
    //   Object.freeze( currentTheme );
    //   this.themeSettings = this.storeTheme;
  },

  computed: {
    ...mapGetters({
      storeTheme: THEME_COLOR
    }),
     themeSettings: {
      get() {
        return this.$store.state.currentTheme;
      },
      set(val) {
        this.$store.commit("MUTATE_SET_THEME_COLOR", val);
      }
    },
  },

  methods: {
    ...mapActions({
      setStoreTheme: MUTATE_SET_THEME_COLOR
    }),
    onApplyTheme() {

    }
  }
};
</script>

<style lang="sass">
  .v-settings
    .v-item-group > *
      cursor: pointer

    &__item
      border-width: 3px
      border-style: solid
      border-color: transparent !important

      &--active
        border-color: #00cae3 !important
</style>
