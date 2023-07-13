/**
 * axios 사용 유틸
 */
import Axios, { AxiosInstance } from 'axios'
export interface HttpErrorVO {
  code: string
  from: string
  message: string
}

export const axiosInstance: AxiosInstance = Axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})
