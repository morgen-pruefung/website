<script lang="ts" setup>

import {newsletterSubscribe} from "@/api/newsletter/newsletter";

const email = ref<string>('');
const emailRules = [
  (v: string) => !!v || 'E-Mail ist erforderlich',
  (v: string) => /.+@.+\..+/.test(v) || 'E-Mail muss gültig sein',
];
const valid = computed(() => {
  return emailRules.every(rule => rule(email.value) === true);
});

const registered = ref<boolean>(false);

async function register() {
  await newsletterSubscribe({email: email.value})

  window.alert('Erfolgreich für den Newsletter registriert');
  registered.value = true;
}

</script>

<template>
  <v-container class="w-50">
    <v-row>
      <v-col>
        <h1>Newsletter</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p>Registiere dich jetzt bei unseren Newsletter, um Neuigkeiten nicht zu verpassen. Es erwarten dich Updates rund um Morgen-Pruefung.de, sowie neue Informationen über die Ausbildungsberufe und deren Themen.</p>
      </v-col>
    </v-row>

    <v-row v-if="registered">
      <v-col>
        <v-alert
          class="my-8"
          color="success"
          icon="mdi-check"
        >
          Erfolgreich für den Newsletter registriert
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          v-model="email"
          :disabled="registered"
          :rules="emailRules"
          class="w-50"
          color="primary"
          label="Email"
          placeholder="z. B. beispiel@gmail.com"
          variant="outlined"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          :disabled="registered || !valid"
          color="primary"
          @click="register"
        >
          Registrieren
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
