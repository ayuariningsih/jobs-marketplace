<template>
  <div>
    <v-list-item>
      <v-text-field
        density="compact"
        class="mt-5"
        variant="outlined"
        clearable
        v-model="searchForm"
        :placeholder="$t('search-job')"
        prepend-inner-icon="mdi-magnify"
        single-line
        @keyup.enter="search"
      ></v-text-field>
    </v-list-item>
  </div>
</template>

<script lang="ts" setup>
const router     = useRouter()  
const route      = useRoute()  
const searchForm = ref(route.query['filter[title]'])

async function search () {
  const query = {'filter[title]': searchForm.value}
  await router.replace({ query: { ...route.query, ['filter[title]']: searchForm.value }})
}
</script>
