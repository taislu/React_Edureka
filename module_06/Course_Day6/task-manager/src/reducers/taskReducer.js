import { ADD_TASK, REMOVE_TASK, TASKS_LOADED } from '../utils/actionTypes'

export function taskReducer(state = [], action) {
  switch(action.type) {
    case TASKS_LOADED:         
      return action.tasks

    case ADD_TASK:      
      return [
        ...state,
        action.task
      ]

    case REMOVE_TASK:
      const { id } = action    
      return state.filter(task => task.id !== id)

    default:
      return state
  }
}