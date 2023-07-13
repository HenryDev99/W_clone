import { NewDailyDTO, NewWeeklyDTO } from 'types/new/newDTO'
import { axiosInstance } from 'utils/httpHelper'

/**
 * API 정의
 */
export enum NewAPIURL {
  daily = '/new/daily',
  weekly = '/new/weekly'
}

/**
 * new daily 리스트 조회
 */
export const getNewDailyList = async () => {
  const { data } = await axiosInstance.get(NewAPIURL.daily)
  return data
}

/**
 * new weekly 리스트 조회
 */
export const getNewWeeklyList = async () => {
  const { data } = await axiosInstance.get(NewAPIURL.weekly)
  return data
}
