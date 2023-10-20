<template>
  <div class="text-center">
    <v-select
      v-model="language"
      class="mt-5"
       variant="outlined"
      :items="items"
      density="compact"
      label=""
    ></v-select>
  </div>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()
const items                 = ['English', 'Malaysia']
const language              = ref('English')

function switchLocale(lang: string) {
  if (lang === 'English') setLocale('en')
  else setLocale('ms')
}

watch(
  () => language.value,
  () => {
    switchLocale(language.value)
  },
)
</script>



<style>

</style>
