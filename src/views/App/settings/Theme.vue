<template>
  <v-container
    id="theme-settings"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Simple Tables"
      link="components/simple-tables"
    />

    <v-row>
      <v-col cols="12">
        <v-card
          v-if="themeSettings"
        >
          <v-card-text>
            <div class="mb-3">
              <code class="text-left">{{ themeSettings }}</code>
            </div>

            <strong class="mb-3 d-inline-block">Theme Colors</strong>

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
                    class="v-settings__item ml-1"
                    size="25"
                    @click="toggle"
                  />
                </template>
              </v-item>
            </v-item-group>

            <v-divider class="my-4" />

            <v-row
            >
              <v-col cols="auto">
                Dark Mode
              </v-col>

              <v-spacer />

              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.darkMode"
                  class="ma-0 pa-0"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-divider class="my-4" />
            <strong class="mb-3 d-inline-block">Sidebar</strong>
              <v-row
            >
              <v-col cols="auto">
                Sidebar Dark
              </v-col>

              <v-spacer />

              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.barDark"
                  class="ma-0 pa-0"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row
            >
              <v-col cols="auto">
                Sidebar Image/Gradient
              </v-col>

              <v-spacer />

              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.barImageShow"
                  class="ma-0 pa-0"
                  hide-details
                />
              </v-col>
            </v-row>
          
            <v-row
            >
              <v-col cols="auto">
                Sidebar ExpandOnHover
              </v-col>

              <v-spacer />

              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.barExpandOnHover"
                  class="ma-0 pa-0"
                  hide-details
                />
              </v-col>
            </v-row>

            <strong class="mb-3 d-inline-block">Images</strong>

            <v-item-group
              v-model="themeSettings.barImage"
              class="mb-3"
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

            <strong class="mb-3 d-inline-block">Bargradient</strong>
            <v-item-group
              v-model="themeSettings.barColor"
              class="mb-3"
            >
              <v-item
                v-for="barColor in barColors"
                :key="barColor"
                :value="barColor"
                class="mx-1"
              >
                <template v-slot="{ active, toggle }">
                  <v-sheet
                    :class="active && 'v-settings__item--active'"
                    class="d-inline-block v-settings__item"
                    @click="toggle"
                  >
                    <div :style="`background-image: url('${themeSettings.barImage}');background-size: cover;height:100px;width:50px;background-repeat: no-repeat`">

                      <div :style="`background-image: linear-gradient(${barColor});height:100px;width:50px;`">
                      </div>
                    </div>

                  </v-sheet>
                </template>
              </v-item>
            </v-item-group>

            <v-divider class="my-4" />
            <strong class="mb-3 d-inline-block">Navbar</strong>
             <v-row
            >
              <v-col cols="auto">
                Navbar dark
              </v-col>

              <v-spacer />


              <v-col cols="auto">
                <v-switch
                  v-model="themeSettings.navDark"
                  class="ma-0 pa-0"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-divider class="my-4" />


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
import { ACTION_SET_THEME, THEME } from "@/store/const";
import { getCurrentTheme } from "@/plugins/util";
import Proxyable from "vuetify/lib/mixins/proxyable";
export default {
  name: "DashboardCoreSettings",
  mixins: [Proxyable],
  data: () => ({
    color: "#E91E63",
    colors: ThemeColors,
    barColors: [
      "to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
      "to bottom, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)",
      "to top, #bdc3c7, #2c3e50",
      "to bottom, #be93c5, #7bc6cc",
      "to bottom, #659999, #f4791f",
      "to bottom, #dd3e54, #6be585",
      "to top, #009fff, #ec2f4b",
      "to bottom, #108dc7, #ef8e38",
      "to bottom, #ff4b1f, #1fddff",
      "to bottom, #114357, #f29492",
      "to top, #feac5e, #c779d0, #4bc0c8",
      "to bottom, #141e30, #243b55",
      "to bottom, #2c3e50, #4ca1af",
      "to top, #4b79a1, #283e51",
      "to bottom, #136a8a, #267871",
      "to bottom, #485563, #29323c",
      "to bottom, #614385, #516395",
      "to bottom, #4cb8c4, #3cd3ad",
      "to bottom, #a18cd1 0%, #fbc2eb 100%",
      "135deg, #667eea 0%, #764ba2 100%",
      "to bottom, #0ba360 0%, #3cba92 100%",
      "to top, #00c6fb 0%, #005bea 100%",
      "to top, #434343 0%, black 100%",
      "to right, #868f96 0%, #596164 100%",
      "to top, #09203f 0%, #537895 100%",
      "to top, #3ab5b0 0%, #3d99be 31%, #56317a 100%",
      "-20deg, #fc6076 0%, #ff9a44 100%",
      "to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%",
      "-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%",
      "-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%",
      "315deg, #537895 0%, #09203f 74%"
    ],
    images: [
      "https://images.pexels.com/photos/3879062/pexels-photo-3879062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/1769369/pexels-photo-1769369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    ],
    menu: false,
    saveImage: "",
    showImg: true,
    themeSettings: {}
  }),
  mounted() {
    //   const currentTheme =this.storeTheme;
    //   Object.freeze( currentTheme );
    this.themeSettings = getCurrentTheme();
  },

  computed: {
    ...mapGetters({
      storeTheme: THEME
    }),
  },

  methods: {
    ...mapActions({
      setStoreTheme: ACTION_SET_THEME
    }),
    onApplyTheme() {
      const self = this;
      const themeUpdated = self.themeSettings;
      self.$vuetify.theme.themes.dark.primary = themeUpdated.color;
      self.$vuetify.theme.themes.light.primary = themeUpdated.color;
      self.$vuetify.theme.dark = themeUpdated.darkMode;
      this.setStoreTheme({
        color: themeUpdated.color,
        darkMode: themeUpdated.darkMode,
        barColor: themeUpdated.barColor,
        barImage: themeUpdated.barImage,
        barImageShow: themeUpdated.barImageShow,
        barDark: themeUpdated.barDark,
        barExpandOnHover: themeUpdated.barExpandOnHover,
        navDark: themeUpdated.navDark
      });
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
