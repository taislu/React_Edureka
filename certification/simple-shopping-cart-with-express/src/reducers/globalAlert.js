import { G_RESET, G_SUCCESS } from '../actions/actions'

const globalAlert = (state={}, action) => {

    switch(action.type) {
      case G_RESET:
        return {}
        
      case G_SUCCESS:
        return {
          type: 'success',
          text: action.text
        }
       
      default:
        return state
    }
  }

export default globalAlert