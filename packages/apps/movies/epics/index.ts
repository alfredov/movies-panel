import { fetchPopularEpic } from './fetchPopular'
import { fetchTopMoviesEpic } from './fetchTopMovies'
import { fetchUpcomingMoviesEpic } from './fetchUpcomingMovies'

export const epics = [
  fetchPopularEpic,
  fetchTopMoviesEpic,
  fetchUpcomingMoviesEpic
]
