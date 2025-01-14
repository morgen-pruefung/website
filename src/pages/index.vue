<script lang="ts" setup>

</script>

<template>
  <v-container class="top-margin bottom-margin">
    <v-row>
      <v-col>
        <div>
          <h1 class="text-h1 font-weight-bold text-primary text-center">
            Morgen-Pruefung.de
          </h1>
          <p class="text-h4 text-secondary text-center mt-4">
            Komprimierte & konstenlose Lerninhalte für dich!
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row class="top-margin">
      <v-col
        class="d-flex justify-center"
        md="12"
      >
        <v-card
          border="10px"
          class="text-center pa-4"
          color="red"
          variant="outlined"
          width="60%"
        >
          <h3 class="text-h3">
            Diese Seite ist noch in Arbeit!
          </h3>

          <p class="text-h5 mt-4 text-grey">
            Wir arbeiten mit Hochdruck daran, dir die besten Lerninhalte zu bieten.
          </p>

          <v-card-actions>
            <v-btn
              class="font-weight-bold mt-8"
              color="red"
              prepend-icon="mdi-alert"
              to="/blog"
              variant="flat"
              width="50%"
            >
              Schau bei unseren Blog vorbei
            </v-btn>

            <v-btn
              class="font-weight-bold mt-8"
              color="red"
              prepend-icon="mdi-alert"
              to="/newsletter"
              variant="flat"
              width="50%"
            >
              Abboniere unseren Newsletter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.top-margin {
  margin-top: 150px !important;
}

.bottom-margin {
  margin-bottom: 150px !important;
}

.code {
  font-family: "Courier New", Courier, monospace;
}
</style>
