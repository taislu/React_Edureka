import { EVEN_INCR, EVEN_DECR, EVEN_RESET } from '../actions/evenCounterActions'

export function evenCounterReducer(state=0, action) {
  switch(action.type) {
    case EVEN_INCR:
      return state + 2

    case EVEN_DECR:
      return state - 2

    case EVEN_RESET:
      return 0

    default:
      return state
  }
}