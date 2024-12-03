<script lang="ts" setup>

</script>

<template>
  <div class="container pa-2 d-flex justify-center">
    <div class="d-flex justify-center flex-column mr-4">
      <p>Bereite dich jetzt auf deine Prüfung vor, bevor es zu spät ist!</p>
    </div>
    <RouterLink to="register/">
      <v-btn
        prepend-icon="mdi-alert"
        variant="outlined"
      >
        LERNE JETZT
      </v-btn>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F44336;
  filter: opacity(0.9) brightness(0.8);
  z-index: -1;
}

.container p {
  font-size: 1.2em;
  font-weight: 500;
}
</style>
