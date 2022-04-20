
export const combineReducersByIndex = (
  index: string,
  reducer: {},
) => { 
  const registerReducer = (reducers: {}) => ({
    ...reducers,
    [index]: reducer,
  })
  return {
    registerReducer,
  }
}
