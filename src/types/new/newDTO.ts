export interface NewPromiseDailyDTO {
  config: any
  data: Array<NewDailyDTO>
  headers: any
  request: any
  status: number
  statusText: string
}

export interface NewDataDTO {
  daily: NewDailyDTO[]
  weekly: NewWeeklyDTO[]
}

export interface NewDailyDTO {
  date: string
  count: number
}

export interface NewWeeklyDTO {
  name: string
  count: number
}
