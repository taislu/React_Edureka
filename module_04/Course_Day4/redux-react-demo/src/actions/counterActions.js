export const INCR = 'INCR'
export const DECR = 'DECR'
export const RESET = 'RESET'

export function incrAction() {  
  return {
    type: INCR
  }
}

export function decrAction() {
  return {
    type: DECR
  }
}

export function resetAction() {
  return {
    type: RESET
  }
}