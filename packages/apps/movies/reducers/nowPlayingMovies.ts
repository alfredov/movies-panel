import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { asyncReducer } from '../core-app/utils'

import action, { TAction, TSuccess } from '../actions/nowPlayingMovies'

const { success, cancel, failure } = action

const defaultState = {
  movies: [],
  totalPages: 999,
}

const data = createReducer<TSuccess, TAction>(defaultState)
  .handleAction([success], (state, { payload }) => {
    return {
      movies: [...state.movies, ...payload.movies],
      totalPages: payload.totalPages
    }
  })
  .handleAction([cancel, failure], () => defaultState)

export default combineReducers({
  ...asyncReducer(action),
  data
})
