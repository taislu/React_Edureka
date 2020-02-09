import { INCR, DECR, RESET } from '../actions/counterActions'

export function counterReducer(state = 0, action) {
  switch(action.type) {
    case INCR:
      return state + 1

    case DECR:
      return state - 1

    case RESET:
      return 0

    default:
      return state
  }
}