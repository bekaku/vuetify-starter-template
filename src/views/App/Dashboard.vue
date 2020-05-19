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

    <v-row v-if="data">
      <v-col v-for="(item, i) in data.data" :key="`user-item-${i}`" cols="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">{{
                `${item.first_name} ${item.last_name}`
              }}</v-list-item-title>
              <v-list-item-subtitle>
                <v-icon color="indigo">mdi-email</v-icon> {{ item.email }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar size="80" color="grey">
              <v-img
                class="elevation-6"
                :src="item.avatar"
                :alt="item.first_name"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn @click="onSelectItem(item.id)" icon
              ><v-icon>mdi-lead-pencil</v-icon></v-btn
            >
            <v-btn icon><v-icon>mdi-chat</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { vLog } from "@/plugins/util";
//service
import UsersService from "@/api/UsersService";
import { onBeforeMount, reactive, toRefs, ref } from "@vue/composition-api";

export default {
  name: "Dashboard",
  // setup(props, { root }) {
  setup() {
    const usersService = new UsersService();
    let state = reactive({ data: null, error: null, loading: false });
    const page = ref(1);

    onBeforeMount(() => {
      fetchData();
    });

    const fetchData = async () => {
      state.loading = true;
      const {response, error} = await usersService.getUsers(page);
      vLog(response);
      if(error){
        vLog(error)
      }
      // state.data = response;
      state.loading = false;
    };

    const onSelectItem = async id => {
      console.log("onSelectItem : " + id);
      const data = await usersService.getUserById(id);
      vLog(data);
    };

    return { ...toRefs(state), onSelectItem };
  }
};
</script>
