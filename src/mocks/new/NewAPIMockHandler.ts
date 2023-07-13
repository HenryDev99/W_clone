import newDailyData from './data/newDailyData.json'
import newWeeklyData from './data/newWeeklyData.json'
import { NewAPIURL } from 'api/new/newAPI'
import { rest } from 'msw'

export const newAPIHandlers = [
  /**
   * new페이지 daily data 조회
   */
  rest.get(NewAPIURL.daily, async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(newDailyData))
  }),

  /**
   * new페이지 weekly data 조회
   */
  rest.get(NewAPIURL.weekly, async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(newWeeklyData))
  })
]

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}
