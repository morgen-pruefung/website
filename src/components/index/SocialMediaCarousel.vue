<script lang="ts" setup>
</script>

<template>
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

    <SocialMediaCarouselItem
      btn-color="light-blue-lighten-2"
      color="light-blue"
      icon="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png"
      link="https://www.tiktok.com/@morgen_pruefung"
      title="TikTok"
    />

    <SocialMediaCarouselItem
      btn-color="purple-lighten-2"
      color="purple"
      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
      link="https://www.instagram.com/morgen_pruefung/"
      title="Instagram"
    />

    <SocialMediaCarouselItem
      btn-color="black-lighten-2"
      color="black"
      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1200px-X_icon_2.svg.png"
      link="https://x.com/MorgenPruefung"
      title="X"
    />

    <SocialMediaCarouselItem
      btn-color="red-darken-2"
      color="red-lighten-2"
      icon="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
      link="https://www.youtube.com/@MorgenPruefung"
      title="YouTube"
    />

    <SocialMediaCarouselItem
      btn-color="indigo-lighten-1"
      color="indigo-darken-2"
      icon="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
      link="https://discord.gg/UxEZAB9teg"
      title="Discord"
    />
  </v-carousel>
</template>

<style scoped>

</style>
