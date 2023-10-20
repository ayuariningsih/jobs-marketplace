
import { defineStore } from 'pinia'
import { getJobList, getJobDetail } from  "~/api/job"
import { Job } from "~/types/Job"

export const useJobStore = defineStore({
  id: 'myJobStore',
  state: () => ({ jobs: <Job[]>[], detail: <Job[]>[] }),
  actions: {
    async fetchJobs() {
      const { query } = useRoute()

      await getJobList(query)
      .then((response) => {
        this.jobs = response.data.data
      })
    },
    async fetchJobDetail(id: number) {
      await getJobDetail(id)
      .then((response) => {
        this.detail = response.data.data
      })
    },
  },
})
