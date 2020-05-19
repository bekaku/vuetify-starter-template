<template>
  <v-menu
    left
    bottom
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
        class="mr-2"
      >
        <v-icon>mdi-translate</v-icon>
        {{currentLanguge}}
      </v-btn>
    </template>

    <v-list :tile="false">
      <v-list-item
        v-for="(l, i) in localeOptions"
        :key="`lacales-${i}`"
        @click="setLanguge(l.id)"
      >
        <v-list-item-title v-text="l.name" />
        <v-list-item-icon>
          <v-icon v-if="currentLanguge == l.id">mdi-check</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import useSiteSetting from "@/composition/UseSiteSetting";
export default defineComponent({
  name: "CoreLocale",
  setup(props, { root }) {
    const { localeOptions, currentLanguge, setLanguge } = useSiteSetting(root);
    return {
      localeOptions,
      currentLanguge,
      setLanguge
    };
  }
});
</script>

<style>
</style>