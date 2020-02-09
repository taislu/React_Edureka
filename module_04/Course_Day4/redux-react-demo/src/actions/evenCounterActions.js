export const EVEN_INCR = 'EVEN_INCR'
export const EVEN_DECR = 'EVEN_DECR'
export const EVEN_RESET = 'EVEN_RESET'

export function evenIncrAction() {
  return {
    type: EVEN_INCR
  }
}

export function evenDecrAction() {
  return {
    type: EVEN_DECR
  }
}

export function evenResetAction() {
  return {
    type: EVEN_RESET
  }
}