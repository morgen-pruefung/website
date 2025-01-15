<script lang="ts" setup>

const props = defineProps<{
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  btnColor: string;
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
      <div class="d-flex fill-height justify-center align-center">
        <div class="mx-8">
          <v-img
            :src="props.icon"
            height="100"
            width="100"
          />
        </div>

        <div class="content-container">
          <h3 class="text-h3">
            {{ props.title }}
          </h3>
          <p class="text-body-1">
            {{ props.subtitle }}
          </p>
          <v-btn
            :color="props.btnColor"
            :href="link"
            class="mt-4"
            elevation="0"
            rounded
            size="large"
            variant="flat"
          >
            Folgen
          </v-btn>
        </div>
      </div>
    </v-sheet>
  </v-carousel-item>
</template>

<style scoped>
.content-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
