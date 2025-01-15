<script lang="ts" setup>

const props = defineProps<{
  title: string;
  subtitle: string;
  color: string;
  link: string;
}>();

</script>

<template>
  <v-carousel-item>
    <v-sheet
      :color="props.color"
      class="px-16"
      height="100%"
      rounded="xl"
    >
      <div class="d-flex fill-height justify-center align-center text-center">
        <div>
          <RouterLink :to="props.link">
            <h3 class="text-h3">
              {{ props.title }}
            </h3>
            <h4 class="text-h4">
              {{ props.subtitle }}
            </h4>
          </RouterLink>
          <v-btn
            :to="props.link"
            class="mt-8"
            color="red"
            elevation="0"
            rounded
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
