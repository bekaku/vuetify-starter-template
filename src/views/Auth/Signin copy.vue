<template>
  <div
    :class="backgroudBg ? 'login-filter' : ''"
    class="fill-height fill-width"
  >
    <v-app-bar
      class="transparent"
      absolute
      elevation="0"
      dense
      :dark="backgroudBg"
    >
      <v-avatar>
        <v-icon color="primary">mdi-vimeo</v-icon>
      </v-avatar>
      <v-toolbar-title>{{ $t("app.name") }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="mr-2">
            <v-icon>mdi-translate</v-icon>EN
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-switch
        v-model="backgroudBg"
        color="primary"
        class="ma-0 pa-0"
        hide-details
        label="Image Bg"
      />
    </v-app-bar>

    <v-container :class="backgroudBg ? 'login' : ''" fluid class="fill-height">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
          <v-card class="px-8 pt-6 pb-12" elevation="0">
            <v-card-title class="text-center font-weight-black">{{
              $t("app.name")
            }}</v-card-title>
            <v-card-subtitle
              class="mb-1 mt-1 subtitle-2 grey--text text--lighten-1"
              >{{
                $t("helper.loginToSystem", [$t("app.name")])
              }}</v-card-subtitle
            >
            <v-card-text>
              <validation-observer ref="form" v-slot="{ handleSubmit, reset }">
                <form
                  @submit.prevent="handleSubmit(signin)"
                  @reset.prevent="reset"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    name="Email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      :label="$t('base.email')"
                      filled
                      rounded
                      prepend-inner-icon="mdi-email-outline"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required|min:4"
                  >
                    <p class="ma-0 text-right">
                      <v-btn
                        text
                        small
                        class="text-capitalize"
                        color="primary"
                        to="/auth/forgot"
                        >{{ $t("authen.forgetPassword") }}</v-btn
                      >
                    </p>
                    <v-text-field
                      v-model="password"
                      :append-icon="
                        showPwd ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                      "
                      :type="showPwd ? 'text' : 'password'"
                      :error-messages="errors"
                      :label="$t('authen.password')"
                      @click:append="showPwd = !showPwd"
                      filled
                      rounded
                      prepend-inner-icon="mdi-key-outline"
                    ></v-text-field>
                  </validation-provider>
                  <div class="mt-6 d-flex justify-space-between">
                    <v-btn
                      text
                      small
                      class="text-capitalize"
                      color="primary"
                      router
                      to="/auth/signup"
                      >{{ $t("authen.createAccount") }}</v-btn
                    >
                    <!-- <v-btn
                      type="submit"
                      color="primary"
                      depressed
                      v-text="$t('authen.login')"
                    ></v-btn>z-->
                    <v-btn
                      type="submit"
                      :loading="loading"
                      :disabled="loading"
                      color="primary"
                      depressed
                    >
                      {{ $t("authen.login") }}
                    </v-btn>
                  </div>
                </form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <core-footer
      :dark="backgroudBg ? true : false"
      :bg="'transparent'"
      :absolute="true"
      :show-to-top="false"
    />
  </div>
</template>

<script>
const axios = require("axios");
import { vLog } from "@/plugins/util";
import { mapActions, mapGetters } from "vuex";
import {
  LOGIN_STATE,
  ACTION_SIGN_IN,
  ACTION_SIGN_OUT
} from "@/store/const";
export default {
  name: "SignIn",
  components: {
    CoreFooter: () => import("@/views/App/components/core/Footer")
  },
  data: () => ({
    email: "",
    password: "",
    showPwd: false,
    backgroudBg: false,
    loading: false
  }),
  computed: {
    ...mapGetters({
      loginState: LOGIN_STATE
    })
  },
  beforeMount () {
    this.logoutStore();
  },
  methods: {
    ...mapActions({
      loginStore: ACTION_SIGN_IN,
      logoutStore: ACTION_SIGN_OUT
    }),
    async signin() {
      console.log("hello");
      const self = this;
      self.loading = true;
      let data = undefined;
      try {
        data = await axios
          .get(`https://randomuser.me/api/`)
          .then(result => result.data);
        if (data) {
          const userData = data.results[0];
          self.loginStore(userData);
        }
      } catch (error) {
        console.log(error.message);
      }
      self.loading = false;
      vLog(data);
    }
  },
  watch: {
    loginState(state) {
      if (state) {
        const self = this;
        self.$router.push(`/`);
      }
    }
  }
};
</script>

<style lang="sass">
.login-filter
  background-image: url('https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'), linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  .v-footer
    border-top: transparent !important
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase

.login
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))
  background-size: cover
</style>
