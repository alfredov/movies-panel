import { fetchPopularEpic } from './fetchPopular'
import { fetchTopMoviesEpic } from './fetchTopMovies'

export const epics = [
  fetchPopularEpic,
  fetchTopMoviesEpic
]
