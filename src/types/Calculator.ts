export type Coin = {
  _id: string
	name: string
	nomenclature: string
  equivalent: number
}

export type Project = {
  _id: string
	name: string
	__v: number
	price: number
}

export type Speciality = {
  _id: string
	name: string
	__v: number
	projects: Project[]
}

export type Area = {
  _id: string
	name: string
	__v: number
	specialities: Speciality[]
}