import { setupWorker } from 'msw'
import { newAPIHandlers } from './new/NewAPIMockHandler'

export const worker = setupWorker(...newAPIHandlers)
