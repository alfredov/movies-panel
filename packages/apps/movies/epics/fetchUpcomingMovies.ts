import { ActionsObservable } from 'redux-observable'
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs'

import action, { TAction } from '../actions/fetchUpcomingMovies'
import { PATH_IMAGES_500_BASE } from '../constants'

export type TResponse = {
  page: number,
  results: {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
  }[],
  total_pages: number,
  total_results: number
}

export const fetchUpcomingMoviesEpic = (
  action$: ActionsObservable<TAction>
) => action$.pipe(
  filter(isActionOf(action.request)),
  switchMap(({ payload }) =>
    ajax.getJSON<TResponse>(`api/movies/upcoming?page=${payload.page}`).pipe(
      mergeMap((response) => {
        return of(action.success({
          totalPages: response.total_pages,
          movies: response.results.map(item => ({
            id: String(item.id),
            overview: item.overview,
            title: item.title,
            releaseDate: item.release_date,
            posterPath: `${PATH_IMAGES_500_BASE}${item.poster_path}`,
          }))
        }))
      }),
      catchError((error: AjaxError) => of(action.failure(error.message)))
    )
  )
)
