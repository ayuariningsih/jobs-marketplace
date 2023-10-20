export interface Job {
  id: number
  title: string
  descriptions: Descriptions
  company: Company
  location: Address
  job_type: string
  job_category: string
  salary: Salary
  posted_at: string
}

export interface Descriptions {
  requirements: string
  reponsibilities: string
  benefits: string
}

export interface Company {
  name: string
  address: Address
  logo: string
}

export interface Address {
  street: string
  additional: string
  city: string
  state: string
  postal_code: string
}

export interface Location {
  street: string
  additional: string
  city: string
  state: string
  country: string
  postal_code: string
}

export interface Salary {
  min: number
  max: number
  currency: string
}