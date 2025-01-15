<template>
  <v-app>
    <v-main>
      <AppBar />
      <main>
        <router-view />
      </main>
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
</style>
