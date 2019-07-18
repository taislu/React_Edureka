import { ADD_TASK, REMOVE_TASK } from '../utils/actionTypes'

export function addTaskAction(formData) {
  return {
    type: ADD_TASK,
    formData
  }
}

export function removeTaskAction(id) {
  return {
    type: REMOVE_TASK,
    id
  }
}