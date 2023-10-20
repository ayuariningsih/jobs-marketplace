<template>
  <div>
    <v-container>
      <div class="d-flex justify-center w-70 align-center">
      </div>

      <v-row justify="center">
        <v-col
          sm="12"
          md="4"
          lg="4"
        >
        <LazyJobList
          v-if="show"
          :data="jobs"
          @update="(value) => fetchJobDetail(value)" />
        </v-col>
        <v-col
          class="d-none d-md-block"
          md="8"
          lg="8"
        >
        <LazyJobDetail
          v-if="show"
          :data="detail"
        />
        </v-col>
      </v-row>
    </v-container>
 </div>
</template>

<script lang="ts" setup>
import { useJobStore } from "~/store/job"

useHead({
  title: "MauKerja.com",
  meta: [
    { name: 'description', content: 'MauKerja Website.' }
  ],
})

const store = useJobStore()
const { fetchJobs, fetchJobDetail } = store
const { jobs, detail } = storeToRefs(store)

const route  = useRoute()  
const show   = ref<Boolean>(false)

async function load() {
  await fetchJobs()
  show.value = true
}

onMounted(() => {
  load()
  manipulate()
})

watch(
  () => route.fullPath,
  async () => {
    await fetchJobs()
  },
)

function manipulate() {
  const data = [{ a: [1, 2, 3] }, { a: [1, 2, 3] }, { b: [4, 5, 6] }]
  const newArray: any[] = []
  // normalise to = [ 1, 2, 3, 1, 2, 3, 4, 5, 6 ]
  data.map(item => {
      const values = Object.values(item)[0]
      // console.log(values[0])
      values.map((val: any) => {
          newArray.push(val)
      })
  })
  console.log('result', newArray)
}
</script>
