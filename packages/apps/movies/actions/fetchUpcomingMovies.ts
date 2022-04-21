import { ActionType, createAsyncAction } from 'typesafe-actions'

import { Movie } from '../schemas'

export type TRequest = { page: number }
export type TSuccess = {
  movies: Movie[],
  totalPages: number,
}

const action = createAsyncAction(
  'FETCH_UPCOMING_MOVIES/REQUEST',
  'FETCH_UPCOMING_MOVIES/SUCCESS',
  'FETCH_UPCOMING_MOVIES/FAILURE',
  'FETCH_UPCOMING_MOVIES/CANCEL',
)<TRequest, TSuccess, string, undefined>()

export type TAction = ActionType<typeof action>

export default action
