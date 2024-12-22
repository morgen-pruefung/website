<script lang="ts" setup>

const props = defineProps<{
  title: string;
  subtitle: string;
  color: string;
}>();

</script>

<template>
  <v-carousel-item>
    <v-sheet
      :color="props.color + '-darken-2'"
      height="100%"
      rounded
    >
      <div class="d-flex fill-height justify-center align-center text-center">
        <div>
          <h3 class="text-h3">
            {{ props.title }}
          </h3>
          <h4 class="text-h4">
            {{ props.subtitle }}
          </h4>
          <v-btn
            :color="props.color + '-darken-3'"
            class="mt-8"
            elevation="0"
            size="large"
          >
            Jetzt lernen
          </v-btn>
        </div>
      </div>
    </v-sheet>
  </v-carousel-item>
</template>

<style scoped>

</style>
