import { RootState } from './reducers'
import { REDUCER_INDEX } from './constants'

export const fetchPopular = (state: RootState) => state[REDUCER_INDEX].fetchPopular
