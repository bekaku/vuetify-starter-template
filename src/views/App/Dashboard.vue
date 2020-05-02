<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row v-if="loading">
      <v-col cols="6" v-for="n in 12" :key="`sketlon-${n}`">
        <v-skeleton-loader
          ref="skeleton"
          :boilerplate="false"
          :type="'table-heading, list-item-two-line, image, table-tfoot'"
          :tile="false"
          class="mx-auto"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(item, i) in dataList" :key="`post-item-${i}`" cols="6">
        <v-card class="mx-auto" elevation="0">
          <v-card-title>
            <v-icon left>
              mdi-comment
            </v-icon>
            <span class="title">{{item.title}}</span>
          </v-card-title>

          <v-card-text class="headline ">
            {{ item.body }}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Bekaku</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//service
import PostService from "@/api/PostService";
const postService = new PostService();
export default {
  name: "DashboardDashboard",

  data() {
    return {
      loading: false,
      dataList: []
    };
  },
  beforeMount() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const self = this;
      self.loading = true;
      try {
        const data = await postService.getPosts();
        self.dataList = data;
      } catch (error) {
        console.log(error.message);
      }
      self.loading = false;
    }
  }
};
</script>
