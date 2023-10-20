<template>
  <div class="default">
    <v-card class="mx-auto" color="grey-lighten-3">
      <v-layout>
        <v-app-bar
          color="#ed3554"
          class="px-5"
        >
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-img
              :width="120"
              aspect-ratio="16/9"
              cover
              src="maukerja-logo.png"
            ></v-img>
          </template>
          <FormSearch class="w-25" />
          <FormSelect />
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <slot />
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped>
.default {
  padding: 1.5rem;
  position: relative;
  background-color: #e4e1e187;
  height: 1800px;
}
</style>