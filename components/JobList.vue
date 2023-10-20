<template>
  <div v-for="(job, index) in data" :key="index">
    <v-card
      class="mx-auto pa-2 my-3 cursor-pointer"
      :class="active === job.id ? 'active' : ''"
      max-width="500"
      @click="setActive(job.id)"
    >
      <v-card-item class="border-b px-0 py-3 mx-3">
        <template #prepend>
          <v-avatar
            class="pa-0"
            size="48"
            rounded="0"
          >
            <v-img :src="job.company.logo"></v-img>
          </v-avatar>
        </template>
    
        <template #title>
          <v-list-item class="w-100 pa-0">
            <v-list-item-title class="font-weight-bold">{{ job.title }}</v-list-item-title>
            <v-list-item-title class="text-body-2">{{ job.company.name }}</v-list-item-title>
          </v-list-item>
        </template>
    
        <template #append>
          <div class="justify-self-end">
            <!-- <v-icon class="mr-2" size="small" icon="mdi-share-variant"></v-icon> -->
            <v-icon class="me-1" size="small" icon="mdi-heart-outline"></v-icon>
          </div>
        </template>
      </v-card-item>

      <v-card-text class="text-p py-0 mt-3 font-weight-bold text-brand-100">
        <v-icon class="mr-2" size="small" icon="mdi-currency-usd"></v-icon>
        MYR{{ job.salary.min }} - MYR{{ job.salary.max }} Per Month
      </v-card-text>

      <v-card-text class="text-p py-0 mt-1">
        <v-icon class="mr-2" size="small" icon="mdi-bag-checked"></v-icon>
        {{ job.job_category }}, {{ job.job_type }}
      </v-card-text>

      <v-card-text class="text-p py-0 mt-1">
        <v-icon class="mr-2" size="small" icon="mdi-map-marker"></v-icon>
        {{ job.location.city }}, {{ job.location.state }}
      </v-card-text>

      <v-card-text class="py-0 mt-2 mx-2 text-truncate">
        {{ job.descriptions.requirements }}
      </v-card-text>

      <v-card-actions class="border-t px-0 py-2 mx-3 mt-3">
        <v-list-item class="w-100">
          <v-list-item-subtitle class="text-caption font-italic">Posted {{ useDateCounter(job.posted_at) }}</v-list-item-subtitle>
          <template v-slot:append>
            <v-btn
              class="text-none ms-4 text-white font-weight-bold"
              color="#ed3554"
              variant="flat"
            >
            {{ $t('apply-job') }}
            </v-btn>
          </template>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { useDateCounter } from "~/composables/use-date-counter";
import { Job } from "~/types/Job"

defineProps({
  data: {
    type: Array as PropType<Job[]>,
    default: []
  }
})

const emits = defineEmits<{
  (e: "update", value: number): void;
}>()

const route  = useRoute()
const active = ref()

async function setActive (id: number) {
  active.value = id
  emits("update", id)
}

onMounted(() => {
  setActive(1)
})
</script>

<style lang="scss" scoped>
.router-link-active {
  text-decoration: none;
}

.active {
  border: 1px solid #ed3554
}
</style>
