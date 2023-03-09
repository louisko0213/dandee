export type WorksheetType = {
  plateNumber: string
  status: 'finished' | 'unfinished'
  service: number[]
  amount: number
  discount: number
  coating_time: Date | null
  comment?: string
}

export const initWorksheet: WorksheetType = {
  plateNumber: '',
  status: 'unfinished',
  service: [],
  amount: 0,
  discount: 0,
  coating_time: null,
  comment: '',
};