import { ActionType, createAsyncAction } from 'typesafe-actions'

import { Movie } from '../schemas'

export type TRequest = { page: number }
export type TSuccess = {
  movies: Movie[],
  totalPages: number,
}

const action = createAsyncAction(
  'FETCH_NOW_PLAYING_MOVIES/REQUEST',
  'FETCH_NOW_PLAYING_MOVIES/SUCCESS',
  'FETCH_NOW_PLAYING_MOVIES/FAILURE',
  'FETCH_NOW_PLAYING_MOVIES/CANCEL',
)<TRequest, TSuccess, string, undefined>()

export type TAction = ActionType<typeof action>

export default action
