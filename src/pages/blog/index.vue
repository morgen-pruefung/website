<script lang="ts" setup>

import {type BlogArticle, getArticles} from "@/api/blog/blog";
import {formatDate, formatStringArray} from "../../utils/formatUtils";

const articles = ref<BlogArticle[]>([]);

onMounted(async () => {
  articles.value = await getArticles();
  articles.value.sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
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
            Morgen-Pruefung.de Blog
          </h1>
          <p class="text-h5 text-secondary text-center mt-4">
            Die neusten News über Lernen und Prüfungen!
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="mt-16 w-50">
    <v-row
      v-for="a in articles"
      :key="a.id"
    >
      <v-col>
        <v-card
          color="green-lighten-2"
          variant="outlined"
        >
          <v-card-title>{{ a.title }}</v-card-title>
          <v-card-subtitle>
            {{ formatStringArray(a.authors) }} | {{ formatDate(a.published_at) }}<br>
            <span class="code font-weight-bold">{{ formatStringArray(a.tags) }}</span><br>
          </v-card-subtitle>
          <v-card-text>{{ a.summary }}</v-card-text>
          <v-card-actions>
            <v-btn
              :to="'/blog/'+a.id"
              variant="tonal"
            >
              Lesen
            </v-btn>
            <v-btn variant="tonal" @click="copyToClipboard('https://morgen-pruefung.de/blog/'+a.id)">
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
