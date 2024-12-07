<script lang="ts" setup>

import router from "@/router";
</script>

<template>
  <v-app-bar
    class="custom-app-bar"
    elevation="0"
  >
    <v-app-bar-title class="flex-0-0">
      <span
        class="cursor-pointer"
        @click="router.push('/')"
      >Morgen Prüfung </span>
      <v-chip
        color="red-darken-4"
        density="compact"
        variant="flat"
      >
        DEV
      </v-chip>
    </v-app-bar-title>

    <div class="d-flex align-start justify-center flex-grow-1">
      <v-btn
        class="mx-4"
        color="grey"
        disabled
        prepend-icon="mdi-file-document"
        rounded
      >
        Prüfungen
      </v-btn>

      <v-btn
        class="mx-4"
        color="grey"
        disabled
        prepend-icon="mdi-puzzle"
        rounded
      >
        Themen
      </v-btn>

      <v-btn
        class="mx-4"
        color="grey"
        prepend-icon="mdi-bookshelf"
        rounded
        to="/blog/"
      >
        Blog
      </v-btn>
    </div>


    <template #append>
      <RouterLink
        class="no-decoration"
        to=""
      >
        <v-btn
          color="secondary"
          disabled
          prepend-icon="mdi-login"
          variant="outlined"
        >
          Login
        </v-btn>
      </RouterLink>

      <!--      <v-btn icon>-->
      <!--        <v-icon>mdi-account-circle</v-icon>-->
      <!--        <v-menu activator="parent">-->
      <!--          <v-list>-->
      <!--            <RouterLink-->
      <!--              class="no-decoration"-->
      <!--              to="/login/"-->
      <!--            >-->
      <!--              <v-list-item prepend-icon="mdi-login">-->
      <!--                <v-list-item-title>Login</v-list-item-title>-->
      <!--              </v-list-item>-->
      <!--            </RouterLink>-->

      <!--            <RouterLink-->
      <!--              class="no-decoration"-->
      <!--              to="/register/"-->
      <!--            >-->
      <!--              <v-list-item prepend-icon="mdi-account-plus">-->
      <!--                <v-list-item-title>Registieren</v-list-item-title>-->
      <!--              </v-list-item>-->
      <!--            </RouterLink>-->
      <!--          </v-list>-->
      <!--        </v-menu>-->
      <!--      </v-btn>-->

      <v-btn
        class="ml-4"
        icon
      >
        <v-icon>mdi-dots-vertical</v-icon>

        <v-menu activator="parent">
          <v-list>
            <RouterLink
              class="no-decoration"
              to=""
            >
              <v-list-item
                disabled
                prepend-icon="mdi-account-group"
              >
                <v-list-item-title>Über uns</v-list-item-title>
              </v-list-item>
            </RouterLink>

            <RouterLink
              class="no-decoration"
              to=""
            >
              <v-list-item
                disabled
                prepend-icon="mdi-message-question"
              >
                <v-list-item-title>Hilfe</v-list-item-title>
              </v-list-item>
            </RouterLink>

            <RouterLink
              class="no-decoration"
              to=""
            >
              <v-list-item
                disabled
                prepend-icon="mdi-bug"
              >
                <v-list-item-title>Feedback</v-list-item-title>
              </v-list-item>
            </RouterLink>

            <a
              href="https://github.com/morgen-pruefung"
              target="_blank"
            >
              <v-list-item prepend-icon="mdi-github">
                <v-list-item-title>GitHub</v-list-item-title>
              </v-list-item>
            </a>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
.custom-app-bar {
  background-color: rgba(18, 18, 18, .2) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

</style>
