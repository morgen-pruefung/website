<script lang="ts" setup>

</script>

<template>
  <v-footer class="pt-8">
    <v-container class="w-66">
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between w-100">
            <div>
              <h2 class="text-primary">
                Social Media
              </h2>
              <p><a href="https://discord.gg/UxEZAB9teg">Discord</a></p>
              <p><a href="https://www.instagram.com/morgen_pruefung">Instagram</a></p>
              <p><a href="https://www.tiktok.com/@morgen_pruefung">TikTok</a></p>
              <p><a href="https://x.com/MorgenPruefung">X</a></p>
              <p><a href="https://www.threads.net/@morgen_pruefung">Threads</a></p>
              <p><a href="https://www.reddit.com/user/MorgenPruefung">Reddit</a></p>
              <p><a href="https://www.youtube.com/@MorgenPruefung">YouTube</a></p>
              <p><a href="https://www.twitch.tv/morgenpruefung ">Twitch</a></p>
            </div>
            <div>
              <h2 class="text-primary">
                Kontakt
              </h2>

              <h4>Die Gründer</h4>
              <p>oliver@morgen-pruefung.de</p>
              <p>lennard@morgen-pruefung.de</p>
              <p>eryk@morgen-pruefung.de</p>
              <br>

              <h4>Support</h4>
              <p>E-Mail: support@morgen-pruefung.de</p>
              <p>Discord server: <a href="https://discord.gg/UxEZAB9teg">hier beitreten</a></p>
              <p>GitHub: <a href="https://github.com/morgen-pruefung">hier</a></p>
            </div>
            <div>
              <h2 class="text-primary">
                So kannst du uns unterstützen
              </h2>
              <ul>
                <li>Teile morgen-pruefung.de mit Freunden</li>
                <li>Teile Lerninhalte mit der Community</li>
                <li>Hilf uns und melde Fehler</li>
                <li>Gib uns Feedback</li>
                <li>Teile Ideen für neue Features</li>
                <li>Engagiere dich in der Community</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col>
          <v-divider opacity="40%" />
          <div class="bottom-footer d-flex justify-space-between mt-4">
            <p>&copy; {{ new Date().getFullYear() }} <strong>Morgen Prüfung</strong></p>

            <div>
              <p><a href="">Impressum</a></p>
              <p><a href="">Datenschutz</a></p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.bottom-footer{
  text-align: center;
}

a, p, li {
  text-decoration: none;
  color: #d5d5d5;
}

a {
  text-decoration: underline;
}

ul {
  padding-left: 20px;
}
</style>
