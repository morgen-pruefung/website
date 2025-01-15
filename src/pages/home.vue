<script lang="ts" setup>

import BottomFloatingBar from "@/components/BottomFloatingBar.vue";
import TopicCarouselItem from "@/components/index/TopicCarouselItem.vue";
import SocialMediaCarousel from "@/components/index/SocialMediaCarousel.vue";

const timeLeftCount = ref(0);
const timeLeft = computed(() => {
  if (timeLeftCount.value === 0) {
    setInterval(() => {
      timeLeftCount.value++;
    }, 900);
  }

  const now = new Date();
  const examDate = new Date("2025-03-25T10:00:00");
  const diff = examDate.getTime() - now.getTime();

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if(days < 0) {
    days = 0;
  }

  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if(hours < 0) {
    hours = 0;
  }

  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  if(minutes < 0) {
    minutes = 0;
  }

  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if(seconds < 0) {
    seconds = 0;
  }


  return `${days}d ${hours}h ${minutes}min ${seconds}s`;
});

</script>


<template>
  <BottomFloatingBar />

  <v-container class="bottom-margin">
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

    <v-row class="mt-16">
      <v-col
        class="d-flex justify-center"
        md="12"
      >
        <v-card
          border="10px"
          class="text-center pa-4"
          color="red"
          rounded
          variant="tonal"
          width="50%"
        >
          <h3 class="text-h3">
            Zeit bis zur AP 1
          </h3>
          <h2 class="text-h2 text-red-darken-4 mt-4">
            {{ timeLeft }}
          </h2>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex w-100 justify-space-between mt-16">
      <div style="width: 600px">
        <h1 class="text-primary text-center">
          Ausgewählte Themen
        </h1>
        <v-carousel
          cycle
          height="300"
          hide-delimiter-background
        >
          <template #prev="{ props }">
            <v-btn
              icon="mdi-chevron-left"
              variant="plain"
              @click="props.onClick"
            />
          </template>
          <template #next="{ props }">
            <v-btn
              icon="mdi-chevron-right"
              variant="plain"
              @click="props.onClick"
            />
          </template>

          <TopicCarouselItem
            color="green-accent-3"
            link="/pruefungen/ap1"
            subtitle="Fachinformatiker | Teil 1"
            title="Themenübersicht"
          />
          <TopicCarouselItem
            color="blue"
            link="/themen/grundlagen-sql"
            subtitle="Fachinformatiker | Teil 1"
            title="Grundlagen SQL"
          />
        </v-carousel>
      </div>

      <div style="width: 500px">
        <h1 class="text-primary text-center">
          Social Media
        </h1>
        <SocialMediaCarousel />
      </div>
    </div>

    <v-row class="mt-16">
      <v-col>
        <h1 class="text-primary text-center">
          Unser Angebot an Prüfungsvorbereitungen
        </h1>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col md="6">
        <v-card
          color="secondary"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der Titel der Prüfung ist: 'Einrichten eines IT-gestützten Arbeitsplatzes' und ist für alle Fachinformatiker Berufsgruppen relevant. Sie hat dauert 90 Minuten und macht 20% deiner Gesamtnote aus."
          title="Fachinformatiker | Teil 1"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              append-icon="mdi-arrow-left"
              class="font-weight-bold"
              color="secondary"
              prepend-icon="mdi-arrow-right"
              to="/pruefungen/ap1"
              variant="flat"
              width="100%"
            >
              Jetzt schnell lernen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col md="6">
        <v-card
          color="secondary"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der zweite Teil setzt sich aus diesen teilen zusammen: 'Planen und Umsetzen eines Softwareprojektes' und 'Entwicklung und Umsetzung von Algorithmen'. Jeder Teil dauert 90 Minuten und macht 10% deiner Gesamtnote aus."
          title="Fachinformatiker AE | Teil 2"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              class="font-weight-bold"
              color="secondary"
              disabled
              variant="flat"
              width="100%"
            >
              Bald verfügbar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col md="6">
        <v-card
          color="secondary"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der zweite Teil setzt sich aus diesen teilen zusammen: 'Konzeption und Administration von IT-Systemen' und 'Analyse und Entwicklung von Netzwerken'. Jeder Teil dauert 90 Minuten und macht 10% deiner Gesamtnote aus."
          title="Fachinformatiker SI | Teil 2"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              class="font-weight-bold"
              color="secondary"
              disabled
              variant="flat"
              width="100%"
            >
              Bald verfügbar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col md="6">
        <v-card
          color="secondary"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der Wirtschafts- und Sozialkunde Teil der Prüfung dauert 60 Minuten und macht 10% deiner Gesamtnote aus. Er ist für alle Fachinformatiker Berufsgruppen relevant."
          title="Fachinformatiker | WiSo"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              class="font-weight-bold"
              color="secondary"
              disabled
              variant="flat"
              width="100%"
            >
              Bald verfügbar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col>
        <h1 class="text-primary text-center">
          Fragen und Antworten
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center">
        <v-expansion-panels class="w-66">
          <v-expansion-panel
            text="Ja, für die anstehenden Prüfungen sind alle Lerninhalte kostenfrei. Wir möchten dir die Möglichkeit geben, dich bestmöglich auf deine Prüfungen vorzubereiten."
            title="Sind alle Lerninhalte kostenfrei?"
          />
          <v-expansion-panel
            text="Wir freuen uns über jede Unterstützung. Du kannst uns gerne eine Spende zukommen lassen oder uns auf Social Media folgen und unsere Beiträge teilen."
            title="Wie kann ich euch unterstützen?"
          />
          <v-expansion-panel
            text="Scroll einfach nach unten und du findest unseren Discord-Server, sowie unsere E-Mails. Wir freuen uns auf deine Nachricht."
            title="Wie kann ich euch kontaktieren?"
          />
          <v-expansion-panel
            text="Du kannst uns gerne Feedback geben, indem du uns eine E-Mail schreibst oder uns auf Social Media kontaktierst."
            title="Wie kann ich euch Feedback geben?"
          />
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col>
        <h1 class="text-primary text-center">
          Über uns
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          color="primary"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          title="Unsere Vision"
          variant="outlined"
        />
      </v-col>

      <v-col>
        <v-card
          color="primary"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          title="Das Team"
          variant="outlined"
        />
      </v-col>

      <v-col>
        <v-card
          color="primary"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          title="Die Zukunft"
          variant="outlined"
        />
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
