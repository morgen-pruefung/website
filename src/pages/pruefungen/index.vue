<script lang="ts" setup>

</script>

<template>
  <v-container class="w-66">
    <v-row>
      <v-col>
        <h1 class="text-h2 text-center text-primary">
          Verfügbare Prüfungen
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          color="green"
          to="/pruefungen/ap1"
        >
          <v-card-title class="text-center">
            <h1>AP Teil 1<br>Alle Fachinformatiker</h1>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider class="my-8" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1 class="text-h2 text-center text-warning">
          Bald verfügbare Prüfungen
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          color="warning"
          disabled
        >
          <v-card-title class="text-center">
            <h1>AP Teil 2<br>Fachinformatiker Anwendungsentwicklung</h1>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          color="warning"
          disabled
        >
          <v-card-title class="text-center">
            <h1>AP Teil 2<br>Fachinformatiker Systemintegration</h1>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          color="warning"
          disabled
        >
          <v-card-title class="text-center">
            <h1>AP Wirtschaft & Sozialkunde<br>Alle Fachinformatiker</h1>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
