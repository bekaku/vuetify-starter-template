<template>
  <div>
    <v-container
      class="text-center"
      fill-height
      style="height: calc(100vh - 58px);"
    >
      <v-row align="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="ma-auto">
          <v-card class="px-8 pt-6 pb-12 transparent" elevation="0">
            <v-img
              src="https://cdn.appedr.com/img/robot-2.png"
              height="225"
              contain
            ></v-img>

            <h1 class="display-3 primary--text mb-5 mt-5 font-weight-black">
              Whoops, 404
            </h1>
            <p class="mb-5">The page you were looking for does not exist</p>

            <v-btn :to="`/`" color="primary" outlined>
              Get me out of here!
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <core-footer :show-to-top="false"/>
  </div>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import("@/views/App/components/core/Footer"),
  }
};
</script>

<style></style>
