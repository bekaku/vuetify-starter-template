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
      <core-locale />
      <v-switch
        v-model="backgroudBg"
        color="primary"
        class="ma-0 pa-0"
        hide-details
        label="Image Bg"
      />
    </v-app-bar>

    <v-container
      :class="backgroudBg ? 'login' : ''"
      fluid
      class="fill-height"
    >
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="5"
          lg="4"
          class="ma-auto"
        >
          <v-card
            class="px-8 pt-6 pb-12"
            elevation="0"
          >
            <v-card-title class="text-center font-weight-black">{{
              $t("app.name")
            }}</v-card-title>
            <v-card-subtitle class="mb-1 mt-1 subtitle-2 grey--text text--lighten-1">{{
                $t("helper.loginToSystem", [$t("app.name")])
              }}</v-card-subtitle>
            <v-card-text>
              <validation-observer
                ref="form"
                v-slot="{ handleSubmit, reset }"
              >
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
                      v-model="state.email"
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
                      >{{ $t("authen.forgetPassword") }}</v-btn>
                    </p>
                    <v-text-field
                      v-model="state.password"
                      :append-icon="
                        state.showPwd
                          ? 'mdi-eye-outline'
                          : 'mdi-eye-off-outline'
                      "
                      :type="state.showPwd ? 'text' : 'password'"
                      :error-messages="errors"
                      :label="$t('authen.password')"
                      @click:append="state.showPwd = !state.showPwd"
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
                    >{{ $t("authen.createAccount") }}</v-btn>
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
      :show-to-top="true"
    />
  </div>
</template>

<script>
const axios = require("axios");
import { vLog } from "@/plugins/util";
import {
  reactive,
  ref,
  computed,
  // watch,
  watchEffect,
  onMounted,
  onUnmounted
} from "@vue/composition-api";
import {
  // MUTATE_SET_LOGIN_STATE,
  ACTION_SIGN_IN,
  ACTION_SIGN_OUT
} from "@/store/const";
export default {
  name: "SignIn",
  components: {
    CoreFooter: () => import("@/views/App/components/core/Footer"),
    CoreLocale: () => import("@/views/App/components/core/Locale")
  },
  setup(props, { root }) {
    // setup(props, context) {
    const { $store, $router, $i18n } = root;//https://composition-api.vuejs.org/api.html#setup

    // State
    const state = reactive({
      email: "",
      password: "",
      showPwd: false
      // loginState: computed(() => context.root.$store.state.user.loginState)
    });
    // const loginState = computed({
    //   get: () => $store.state.user.loginState
    // });
    const loginState = computed(() => $store.state.user.loginState);
    watchEffect(() => {
      if (loginState.value) {
        console.log("loginState OK  ");
        $router.push(`/`);
      }
    });

    // const email = ref(null);
    // const password = ref(null);
    // const showPwd = ref(false);
    const backgroudBg = ref(false);
    const loading = ref(false);

    // Computed props
    // const formattedMoney = computed(() => money.value.toFixed(2));

    // Hooks
    // onMounted(() => console.log("Clock Object mounted"));
    onMounted(() => {
      console.log("mounted! " + $i18n.tc("app.fullName"));
      // console.log($store);
      // console.log(context.root.$store);
      //logout
      $store.dispatch(ACTION_SIGN_OUT);
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });

    // Methods
    // const add = () => (money.value += Number(delta.value));

    const signin = async () => {
      console.log("email : " + state.email + ", pwd : " + state.password);

      loading.value = true;
      let data = undefined;
      try {
        data = await axios
          .get(`https://randomuser.me/api/`)
          .then(result => result.data);
        if (data) {
          const userData = data.results[0];
          // $store.commit(MUTATE_SET_LOGIN_STATE, true);
          $store.dispatch(ACTION_SIGN_IN, userData);
          vLog(userData);
        }
      } catch (error) {
        console.log(error.message);
      }
      loading.value = false;
      vLog(data);
    };

    // Watchers
    // const moneyWatch = watch(money, (newVal, oldVal) =>
    //   console.log("Money changed", newVal, oldVal)
    // );

    return {
      loginState,
      state,
      backgroudBg,
      loading,
      signin
    };
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
