import { getNewDailyList, getNewWeeklyList } from 'api/new/newAPI'
import { NewDailyDTO, NewWeeklyDTO } from 'types/new/newDTO'

export const dailyData = 'NEW/DAILY'
export const weeklyData = 'NEW/WEEKLY'

export const getDailyData = () => ({ type: dailyData })
export const getWeeklyData = () => ({ type: weeklyData })

type newAction =
  | ReturnType<typeof getDailyData>
  | ReturnType<typeof getWeeklyData>

export type newState = {
  daily: NewDailyDTO[]
  weekly: NewWeeklyDTO[]
}

const initalState: newState = {
  daily: [],
  weekly: []
}

export const newReducer = (state = initalState, action: newAction) => {
  switch (action.type) {
    case dailyData:
      getNewDailyList().then((data: NewDailyDTO[]) => {
        state.daily = data
        return state.daily
      })
      break
    case weeklyData:
      getNewWeeklyList().then((data: NewWeeklyDTO[]) => {
        state.weekly = data
        return state.weekly
      })
      break
    default:
      return state
  }
}
