export default (state = { numberOfCakes: 0 }, action) => {
  const originalNumberOfCakes = state.numberOfCakes;
  switch (action.type) {
   case 'ADD_CAKE':
    return { numberOfCakes: originalNumberOfCakes + 1 }
   default:
    return state
  }
}