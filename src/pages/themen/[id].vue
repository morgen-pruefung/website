<script lang="ts" setup>

import router from "@/router";
import {ref} from "vue";
import {getTopic, getTopicTextContent, type Topic} from "@/api/topic/topic";
import MarkdownIt from "markdown-it";

const params = router.currentRoute.value.params as {id: string};
const topicId = params.id;
const topic = ref<Topic>({
  id: "N/A",
  name: "Not found",
  summary: "Topic not found",
});

const textContent = ref<string>("Topic was not found");

onMounted(async () => {
  topic.value = await getTopic(topicId);
  textContent.value = topic.value.summary;
  textContent.value = await getTopicTextContent(topicId);

  const md = MarkdownIt();
  document.getElementById("content")!.innerHTML = md.render(textContent.value);
});
</script>

<template>
  <v-container class="w-66">
    <v-row>
      <v-col>
        <div>
          <h2 class="text-h2 font-weight-bold text-primary text-center">
            {{ topic.name }}
          </h2>
          <p class="text-h5 text-secondary text-center mt-4">
            {{ topic.summary }}
          </p>

          <WorkInProgressDisclaimer/>
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

::v-deep p {
  text-align: justify;
}
</style>
