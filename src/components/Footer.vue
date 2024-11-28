<script lang="ts" setup>

</script>

<template>
  <v-footer class="custom-footer pt-8">
    <v-container class="w-66">
      <v-row>
        <div class="d-flex justify-space-between w-100">
          <div>
            <h2>Social Media</h2>
            <p><a href="">Discord</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">TikTok</a></p>
            <p><a href="">X</a></p>
            <p><a href="">Threads</a></p>
            <p><a href="">Reddit</a></p>
            <p><a href="">YouTube</a></p>
            <p><a href="">Twitch</a></p>
            <br>
            <p>&copy; {{ new Date().getFullYear() }} <strong>Morgen Prüfung</strong></p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <p>Gründer: Oliver Schlüter</p>
            <p>Discord: real_oliver</p>
            <p>oliver@morgen-pruefung.de</p>
          </div>
          <div>
            <h2>Unterstütze uns</h2>
            <p>Erzähle anderen von morgen-pruefung.de</p>
            <p>Trage Inhalte bei</p>
            <p>Melde Bugs / Fehler</p>
            <p>Feedback</p>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.custom-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

a, p {
  text-decoration: none;
  color: #d5d5d5;
}

a {
  text-decoration: underline;
}
</style>
