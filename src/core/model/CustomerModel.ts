import { carSizeType } from "./CarModel"

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
export const initCustomer: CustomerType = {
  plateNumber: '',
  name: '',
  gender: 'male',
  address: '',
  brand: '',
  model: '',
  size: 'small',
  color: '',
  phoneOne: '',
  phoneTwo: '',
  comment: ''
}