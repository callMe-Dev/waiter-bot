export interface IConfig {
  token: string | number | undefined
  prefix: string
}

export interface IFood {
  name: string
  imgUrl: string
  imgName: string
  index: number
}

export interface FoodItem {
  name: string
  valid: boolean
  image: string
  description: string
}
