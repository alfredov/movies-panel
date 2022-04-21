import { ActionType, createAsyncAction } from 'typesafe-actions'

import { Movie } from '../schemas'

export type TRequest = { page: number }
export type TSuccess = {
  movies: Movie[],
  totalPages: number,
}

const action = createAsyncAction(
  'FETCH_TOP_MOVIES/REQUEST',
  'FETCH_TOP_MOVIES/SUCCESS',
  'FETCH_TOP_MOVIES/FAILURE',
  'FETCH_TOP_MOVIES/CANCEL',
)<TRequest, TSuccess, string, undefined>()

export type TAction = ActionType<typeof action>

export default action
