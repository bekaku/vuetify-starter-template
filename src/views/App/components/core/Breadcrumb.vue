<template>
  <v-breadcrumbs v-if="$route.meta.breadcrumb" :items="$route.meta.breadcrumb">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item class="red--text" :href="item.href" :disabled="item.disabled">
        <span :class="!item.disabled ? 'primary--text' : ''">{{ item.i18n ? $t(item.text) : item.text }}</span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  name: "DashboardCoreBreadcrumb"
};
</script>
