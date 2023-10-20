import {
  createLazyton,
  ApiResponse,
} from '@privyid/nuapi/core'
import { Parameters } from "~/types/Parameter"
import { Job } from "~/types/Job"


const useApi = createLazyton({ prefixURL: '/api' })

export async function getJobList(parameters?: Parameters): ApiResponse<{ data: Job[] }> {
  return await useApi().get('/jobs', { params: parameters })
}

export async function getJobDetail (id: number = 1): ApiResponse<{data: Job[]}> {
  return await useApi().get(`/jobs?filter[id]=${id}`)
}

export async function searchByTitle (title: string): ApiResponse<{data: Job[]}> {
  return await useApi().get(`/jobs?filter[title]=${title}`)
}
