import { combineReducers } from 'redux'

import fetchPopular from './fetchPopular'
import { combineReducersByIndex } from '../core-app/utils'
import { REDUCER_INDEX } from '../constants'
import { StateType } from 'typesafe-actions'

const reducer = combineReducers({
  fetchPopular
})

export const { registerReducer } = combineReducersByIndex(REDUCER_INDEX, reducer)

export type RootState = {
  [REDUCER_INDEX]: StateType<typeof reducer>
}
