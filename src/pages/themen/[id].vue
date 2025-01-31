<script lang="ts" setup>

import router from "@/router";
import {ref} from "vue";
import {getTopic, getTopics, getTopicTextContent, type Topic} from "@/api/topic/topic";
import MarkdownIt from "markdown-it";
import {type Category, sortTopicsByCategory} from "@/api/topic/category";


const topicId = computed(() => {
  const params = router.currentRoute.value.params as {id: string};
  return params.id
});

const topic = ref<Topic>({
  id: "N/A",
  name: "Not found",
  summary: "Topic not found",
  category: "N/A",
});

const categories = ref<Category[]>([]);

const textContent = ref<string>("Topic was not found");

watch(topicId, async () => {
  await update();
});

onMounted(async () => {
  await update();
});

async function update() {
  topic.value = await getTopic(topicId.value);
  textContent.value = topic.value.summary;
  textContent.value = await getTopicTextContent(topicId.value);

  const md = MarkdownIt();
  document.getElementById("content")!.innerHTML = md.render(textContent.value);

  categories.value = sortTopicsByCategory(await getTopics());

  window.scrollTo(0, 0);
}
</script>

<template>
  <div class="sidebar">
    <v-navigation-drawer color="#151e15">
      <v-list>
        <v-list-item title="Themenliste" />

        <template
          v-for="c in categories"
          :key="c.name"
        >
          <v-divider />
          <v-list-subheader>{{ c.name }}</v-list-subheader>

          <v-list-item
            v-for="t in c.topics"
            :key="t.id"
            :title="t.name"
            :to="'/themen/' + t.id"
          />
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>

  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-h2 font-weight-bold text-primary text-center mt-4">
          {{ topic.name }}
        </h2>
        <p class="text-h5 text-secondary text-center mt-4">
          <span class="code font-weight-bold">{{ topic.category }}</span><br>
          {{ topic.summary }}
        </p>

        <WorkInProgressDisclaimer />
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

.sidebar {
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
}

::v-deep #content * {
  padding: revert;
  margin: revert;
}

::v-deep #content h1,
::v-deep #content h2,
::v-deep #content h3{
  color: #4dd857;
}

::v-deep #content p,
::v-deep #content li,
::v-deep #content code{
  color: #ced5cf;
}

::v-deep #content h1,
::v-deep #content h2 {
  margin-top: 2em;
}

::v-deep #content h1:first-of-type {
  margin-top: 0;
}

::v-deep p {
  text-align: justify;
}
</style>
