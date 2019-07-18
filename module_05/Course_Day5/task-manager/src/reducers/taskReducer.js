import { ADD_TASK, REMOVE_TASK } from '../utils/actionTypes'
import Task from '../models/Task'

let initialState = []
initialState = [ new Task(1,'Test-1'), new Task(2, 'Test-2') ]

export function taskReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TASK:
      const { title, description } = action.formData
      const newTask = new Task(
        state.length + 1,
        title,
        description
      )

      return [
        ...state,
        newTask
      ]

    case REMOVE_TASK:
      const { id } = action    

      return state.filter(task => task.id !== id)

    default:
      return state
  }
}