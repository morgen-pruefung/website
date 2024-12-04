<script lang="ts" setup>
import router from "@/router";
import {type BlogArticle, getArticle} from "@/api/blog/blog";
import {formatDate, formatStringArray} from "@/utils/formatUtils";
import MarkdownIt from "markdown-it";

const articleId = (router.currentRoute.value.params as any).id;
const article = ref<BlogArticle>({
  id: "",
  title: "",
  authors: [],
  published_at: "",
  tags: [],
  summary: "",
  body: ""
});

onMounted(async () => {
  article.value = await getArticle(articleId);

  const md = MarkdownIt();
  document.getElementById("content")!.innerHTML = md.render(article.value.body);
});
</script>

<template>
  <v-container class="w-50">
    <v-row>
      <v-col>
        <div>
          <h1 class="text-h2 font-weight-bold text-primary text-center">
            {{ article.title }}
          </h1>
          <p class="text-h5 text-secondary text-center mt-4">
            {{ formatStringArray(article.authors) }} | {{ formatDate(article.published_at) }}<br>
            <span class="code font-weight-bold">{{ formatStringArray(article.tags) }}</span><br>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col>
        <div
          id="content"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
::v-deep #content * {
  padding: revert;
  margin: revert;
}
</style>
