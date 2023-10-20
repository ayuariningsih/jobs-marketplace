<template>
  <div v-for="(job, index) in data" :key="index">
    <v-card
      class="pa-2 my-3"
      max-width="900"
    >
      <v-card-item class="px-0 py-3 mx-3">
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
            <v-icon class="mr-2" size="small" icon="mdi-share-variant"></v-icon>
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

      <v-list-item class="w-100 px-5 py-2 border-b">
        <v-list-item-subtitle class="text-caption italic">Posted {{ useDateCounter(job.posted_at) }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-btn
            class="text-none text-white font-weight-bold"
            color="#ed3554"
            variant="flat"
          >
            {{ $t('apply-job') }}
          </v-btn>
        </template>
      </v-list-item>
      
      <v-card-text class="text-p py-0 mt-2 mx-2 font-weight-bold">
        Requirements
      </v-card-text>

      <v-card-text class="text-p py-0 mt-5 mx-2 elipsis">
        {{ job.descriptions.requirements }}
      </v-card-text>

      <v-card-text class="text-p pt-5 pb-0 mt-5 mx-2 font-weight-bold">
        Responsibilities
      </v-card-text>

      <v-card-text class="text-p py-0 mt-2 mx-2 elipsis">
        {{ job.descriptions.reponsibilities }}
      </v-card-text>

      <v-card-text class="text-p py-0 mt-5 mx-2 elipsis">
        {{ job.descriptions.requirements }}
      </v-card-text>

      <v-card-text class="text-p pt-5 pb-0 mt-5 mx-2 font-weight-bold">
        Benefits
      </v-card-text>

      <v-card-text class="text-p py-0 mt-2 mx-2 elipsis">
        {{ job.descriptions.benefits }}
      </v-card-text>

      <v-card-actions class="border-t px-0 py-2 mx-3 mt-3">
        <v-list-item class="w-100">
          <v-list-item-title class="font-weight-bold">{{ $t('qna.title') }}</v-list-item-title>
          <v-card-text class="text-small pa-0 mt-2">{{ $t('qna.description') }}</v-card-text>
          <template v-slot:append>
            <v-btn
              class="text-none ms-4 text-white rounded-pill px-5"
              color="#ed3554"
              variant="flat"
            >
            Ask Question
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
</script>