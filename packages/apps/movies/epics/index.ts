import { fetchPopularEpic } from './fetchPopular'
import { fetchTopMoviesEpic } from './fetchTopMovies'
import { fetchUpcomingMoviesEpic } from './fetchUpcomingMovies'
import {  nowPlayingMoviesEpic } from './nowPlayingMovies'

export const epics = [
  fetchPopularEpic,
  fetchTopMoviesEpic,
  fetchUpcomingMoviesEpic,
  nowPlayingMoviesEpic
]
