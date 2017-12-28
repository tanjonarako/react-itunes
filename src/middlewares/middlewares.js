const middleware = store => next => action => {
  if (action.type === "updateList") {
    return fetch(action.payload.request.url)
      .then(response => response.json())
      .then(response => {
          const successAction = {
            type: `${action.type}_SUCCESS`,
            payload: {
              list: response.results
            }
          }
          next(successAction)
      })
  }
  return next(action)
}

export default middleware
