import { RootState } from './reducers'
import { REDUCER_INDEX } from './constants'

export const fetchPopular = (state: RootState) => state[REDUCER_INDEX].fetchPopular

export const fetchTopMovies = (state: RootState) => state[REDUCER_INDEX].fetchTopMovies

export const fetchUpcomingMovies = (state: RootState) => state[REDUCER_INDEX].fetchUpcomingMovies

export const nowPlayingMovies = (state: RootState) => state[REDUCER_INDEX].nowPlayingMovies
