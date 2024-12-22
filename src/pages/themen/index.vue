<script lang="ts" setup>

import {getTopics, type Topic} from "@/api/topic/topic";
import WorkInProgressDisclaimer from "@/components/WorkInProgressDisclaimer.vue";

const topics = ref<Topic[]>([]);

onMounted(async () => {
  topics.value = await getTopics();
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    window.alert('Link wurde in die Zwischenablage kopiert!');
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <h1 class="text-h2 font-weight-bold text-primary text-center">
            Themengebiete für Prüfungen
          </h1>
          <p class="text-h5 text-secondary text-center mt-4">
            Zusammenstellung von Themen für Prüfungen
          </p>

          <WorkInProgressDisclaimer/>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="mt-16 w-33">
    <v-row
      v-for="t in topics"
      :key="t.id"
    >
      <v-col>
        <v-card
          color="green-lighten-2"
          variant="outlined"
        >
          <RouterLink :to="'/themen/'+t.id">
            <v-card-title>{{ t.name }}</v-card-title>
          </RouterLink>
          <v-card-subtitle>
<!--            <span class="code font-weight-bold">{{ formatStringArray(a.tags) }}</span><br>-->
          </v-card-subtitle>
          <v-card-text>{{ t.summary }}</v-card-text>
          <v-card-actions>
            <v-btn
              :to="'/themen/'+t.id"
              prepend-icon="mdi-school"
              variant="tonal"
            >
              Lernen
            </v-btn>
            <v-btn
              prepend-icon="mdi-share-variant"
              variant="tonal"
              @click="copyToClipboard('https://morgen-pruefung.de/themen/'+t.id)"
            >
              Teilen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.code {
  font-family: monospace;
}
</style>
