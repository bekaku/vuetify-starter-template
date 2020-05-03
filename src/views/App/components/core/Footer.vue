<template>
  <v-footer id="dashboard-core-footer" :dark="dark" :absolute="absolute" :class="bg">
    <v-container>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center font-weight-light mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            class="mr-0 grey--text"
            :class="$vuetify.theme.dark || dark ? 'text--lighten-3' : 'text--darken-3'"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col
          cols="12"
          md="auto"
        >
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            &copy; {{ new Date().getFullYear() }}, made with
            <v-icon color="pink" size="18">
              mdi-heart
            </v-icon>
            by <a class="primary--text" href="https://www.facebook.com/bekaku">Bekaku</a> for a better web.
          </div>
        </v-col>
      </v-row>

      <v-btn
        v-if="showToTop"
        v-scroll="onScroll"
        v-show="fab"
        fab
        fixed
        bottom
        right
        large
        :color="!$vuetify.theme.dark ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .5)'"
        @click="toTop"
      >
        <v-icon color="white">mdi-chevron-up</v-icon>
      </v-btn>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default:false 
    },
    absolute: {
      type : Boolean,
      default : false
    },
    bg:{
      type : String,
      default : ''
    },
    showToTop:{
      type : Boolean,
      default : true
    }
  },
  name: "DashboardCoreFooter",
  

  data: () => ({
    fab: false,
    links: [
      {
        href: "#",
        text: "About Us"
      },
      {
        href: "#",
        text: "News"
      },
      {
        href: "#",
        text: "Blog"
      }
    ]
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
