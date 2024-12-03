<template>
  <v-app>
    <v-main>
      <AppBar />
      <main>
        <!--<router-view />-->
        <WIP />
      </main>
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
import Footer from "@/components/Footer.vue";
import WIP from "@/pages/WIP.vue";
</script>

<style scoped>
main {
  margin: 8px;
  padding-bottom: 200px;
}
</style>
