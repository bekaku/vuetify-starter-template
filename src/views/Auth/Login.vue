<template>
  <v-container
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
          <v-card-title class="text-center font-weight-black">{{$t('app.name')}}</v-card-title>
          <v-card-subtitle class="mb-5 mt-1 subtitle-2 grey--text text--lighten-1">{{$t('helper.loginToSystem',[$t('app.name')])}}</v-card-subtitle>
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
                    v-model="email"
                    :error-messages="errors"
                    :label="$t('base.email')"
                    outlined
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
                      class="pl-0 text-capitalize"
                      color="primary"
                      to="/auth/forgot"
                    >{{$t('authen.forgetPassword')}}</v-btn>
                  </p>
                  <v-text-field
                    v-model="password"
                    :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPwd ? 'text' : 'password'"
                    :error-messages="errors"
                    :label="$t('authen.password')"
                    @click:append="showPwd = !showPwd"
                    outlined
                  ></v-text-field>
                </validation-provider>
                <div class="mt-6 d-flex justify-space-between">
                  <v-btn
                    text
                    small
                    class="pl-0 text-capitalize"
                    color="primary"
                    router
                    to="/auth/signup"
                  >{{$t('authen.createAccount')}}</v-btn>
                  <v-btn
                    type="submit"
                    class="primary"
                    depressed
                    v-text="$t('authen.login')"
                  ></v-btn>
                </div>
              </form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
    showPwd: false
  }),
  methods: {
    signin() {
      console.log("hello");
      this.$router.push(`/`);
    }
  }
};
</script>

<style></style>
