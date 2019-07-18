export default (state = 0, action) => {
  switch (action.type) {
    case 'SQUARE':
      return state * state
    case 'HALF':
      return state / 2
    case 'INCREMENT':
      return state + 1
    default:
      return state + 1
  }
}