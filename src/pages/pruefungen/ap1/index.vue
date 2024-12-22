<script lang="ts" setup>

import {ref} from "vue";
import {type Exam, getExam} from "@/api/exam/exam";
import {getTopic, type Topic} from "@/api/topic/topic";

const exam = ref<Exam>({
  id: "fachinformatiker-ap1",
  name: "Fachinformatiker Teil 1",
  topic_ids: []
})

const topics = ref<Topic[]>([])

onMounted(async () => {
  exam.value = await getExam("fachinformatiker-ap1");

  for (const topicId of exam.value.topic_ids) {
    topics.value.push(await getTopic(topicId));
  }
})

</script>

<template>
  <div class="content">
    <h2 class="text-h2 text-center text-primary mt-8 mb-4">
      AP Teil 1 - für alle Fachinformatiker
    </h2>
    <h4 class="text-h4 text-center text-secondary mb-8">
      Einrichten eines IT-gestützten Arbeitsplatzes
    </h4>

    <WorkInProgressDisclaimer />

    <v-divider class="my-16" />
    <h1 class="my-4">
      Allgemeine Hinweise
    </h1>
    <h1 class="my-4">
      Prüfungsinhalte
    </h1>

    <v-container>
      <v-row>
        <v-col
          v-for="t in topics"
          :key="t.id"
          md="6"
        >
          <v-card
            color="blue-lighten-2"
            variant="outlined"
          >
            <RouterLink :to="'/themen/'+t.id">
              <v-card-title>{{ t.name }}</v-card-title>
            </RouterLink>
            <v-card-text>{{ t.summary }}</v-card-text>
            <v-card-actions>
              <v-btn
                :to="'/themen/'+t.id"
                prepend-icon="mdi-school"
                variant="tonal"
              >
                Lernen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.content {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
