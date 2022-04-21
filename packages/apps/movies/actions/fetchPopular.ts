import { ActionType, createAsyncAction } from 'typesafe-actions'

import { Movie } from '../schemas'

export type TRequest = { page: number }
export type TSuccess = {
  movies: Movie[],
  totalPages: number,
}

const action = createAsyncAction(
  'FETCH_POPULAR/REQUEST',
  'FETCH_POPULAR/SUCCESS',
  'FETCH_POPULAR/FAILURE',
  'FETCH_POPULAR/CANCEL',
)<TRequest, TSuccess, string, undefined>()

export type TAction = ActionType<typeof action>

export default action

