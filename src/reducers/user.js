export default (state = { loggedIn: false }, action) => {
  switch (action.type) {
   case 'SIGN_IN':
    return { loggedIn: true }
   default:
    return state
  }
}