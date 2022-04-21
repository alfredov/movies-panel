import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import fetchPopular from './fetchPopular'
import fetchTopMovies from './fetchTopMovies'
import fetchUpcomingMovies from './fetchUpcomingMovies'
import nowPlayingMovies from './nowPlayingMovies'

import { combineReducersByIndex } from '../core-app/utils'
import { REDUCER_INDEX } from '../constants'

const reducer = combineReducers({
  fetchPopular,
  fetchTopMovies,
  fetchUpcomingMovies,
  nowPlayingMovies
})

export const { registerReducer } = combineReducersByIndex(REDUCER_INDEX, reducer)

export type RootState = {
  [REDUCER_INDEX]: StateType<typeof reducer>
}
