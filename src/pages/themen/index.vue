<script lang="ts" setup>

import {getTopics, type Topic} from "@/api/topic/topic";
import WorkInProgressDisclaimer from "@/components/WorkInProgressDisclaimer.vue";

interface Category {
  name: string;
  topics: Topic[];
}

const topics = ref<Topic[]>([]);
const sortedTopics = ref<Category[]>([]);

onMounted(async () => {
  topics.value = await getTopics();
  sortedTopics.value = sortTopicsByCategory();
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    window.alert('Link wurde in die Zwischenablage kopiert!');
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
}

function sortTopicsByCategory(): Category[] {
  const categories: Category[] = [];

  topics.value.forEach((topic) => {
    const category = categories.find((c) => c.name === topic.category);
    if (category) {
      category.topics.push(topic);
    } else {
      categories.push({
        name: topic.category,
        topics: [topic]
      });
    }
  });

  return categories;
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <h2 class="text-h2 font-weight-bold text-primary text-center">
            Themengebiete für Prüfungen
          </h2>
          <p class="text-h5 text-secondary text-center mt-4">
            Zusammenstellung von Themen für Prüfungen
          </p>

          <WorkInProgressDisclaimer />
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="mt-4 w-33">
    <v-row
      v-for="c in sortedTopics"
      :key="c.name"
    >
      <v-col>
        <h1 class="text-primary">
          {{ c.name }}
        </h1>
      </v-col>

      <v-col
        v-for="t in c.topics"
        :key="t.id"
        md="12"
      >
        <v-card
          color="green-lighten-2"
          variant="outlined"
        >
          <RouterLink :to="'/themen/'+t.id">
            <v-card-title>{{ t.name }}</v-card-title>
          </RouterLink>
          <v-card-subtitle>
            <span class="code font-weight-bold">{{ t.category }}</span><br>
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
