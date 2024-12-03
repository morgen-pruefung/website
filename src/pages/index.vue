<script lang="ts" setup>

import BottomFloatingBar from "@/components/BottomFloatingBar.vue";

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
          width="50%"
        >
          <h1 class="text-h3">
            Zeit bis zur AP 1
          </h1>
          <h2 class="text-h2 text-red-darken-4 mt-8">
            {{ timeLeft }}
          </h2>

          <v-card-actions>
            <v-btn
              append-icon="mdi-alert"
              class="font-weight-bold mt-8"
              color="red"
              prepend-icon="mdi-alert"
              variant="flat"
              width="100%"
            >
              Jetzt schnell lernen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="top-margin">
      <v-col md="6">
        <v-card
          color="blue"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der Titel der Prüfung ist: 'Einrichten eines IT-gestützten Arbeitsplatzes' und ist für alle Fachinformatiker Berufsgruppen relevant. Sie hat dauert 90 Minuten und macht 20% deiner Gesamtnote aus."
          title="Fachinformatiker | Teil 1"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              append-icon="mdi-arrow-left"
              class="font-weight-bold"
              color="blue"
              prepend-icon="mdi-arrow-right"
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
          color="blue"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der zweite Teil setzt sich aus diesen teilen zusammen: 'Planen und Umsetzen eines Softwareprojektes' und 'Entwicklung und Umsetzung von Algorithmen'. Jeder Teil dauert 90 Minuten und macht 10% deiner Gesamtnote aus."
          title="Fachinformatiker AE | Teil 2"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              append-icon="mdi-arrow-left"
              class="font-weight-bold"
              color="blue"
              prepend-icon="mdi-arrow-right"
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
          color="blue"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der zweite Teil setzt sich aus diesen teilen zusammen: 'Konzeption und Administration von IT-Systemen' und 'Analyse und Entwicklung von Netzwerken'. Jeder Teil dauert 90 Minuten und macht 10% deiner Gesamtnote aus."
          title="Fachinformatiker SI | Teil 2"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              append-icon="mdi-arrow-left"
              class="font-weight-bold"
              color="blue"
              prepend-icon="mdi-arrow-right"
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
          color="blue"
          subtitle="Akute Prüfungsvorbereitung"
          text="Der Wirtschafts- und Sozialkunde Teil der Prüfung dauert 60 Minuten und macht 10% deiner Gesamtnote aus. Er ist für alle Fachinformatiker Berufsgruppen relevant."
          title="Fachinformatiker | WiSo"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn
              append-icon="mdi-arrow-left"
              class="font-weight-bold"
              color="blue"
              prepend-icon="mdi-arrow-right"
              variant="flat"
              width="100%"
            >
              Jetzt schnell lernen
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
