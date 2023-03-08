import { carSizeType } from "./Car"

export type CustomerType = {
  plateNumber: string
  name: string
  gender: 'male' | 'female'
  address: string
  brand: string
  model: string
  size: carSizeType
  color: string
  phoneOne: string
  phoneTwo?: string
  comment?: string
}