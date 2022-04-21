import { combineReducers } from 'redux'
import { asyncReducer } from '../core-app/utils'

import action from '../actions/fetchPopular'

export default combineReducers({ ...asyncReducer(action, { movies: [], totalPages: 0 })})
