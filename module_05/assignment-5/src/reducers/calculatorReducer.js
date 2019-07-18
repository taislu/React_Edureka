const calculatorReducer = (state = 0, action) => {
    //console.log("state : ", state, " action.type : ", action.type)
    switch (action.type) {
      case 'SQUARE':
        return state * state
      case 'DOUBLE':
        return state * 2
      case 'DECREMENT':
        return state - 1
    /*    
      case 'HALF':
        return state / 2
      case 'INCREMENT':
        return state + 1
    */
      default:
        return state 
    }
}
export default calculatorReducer