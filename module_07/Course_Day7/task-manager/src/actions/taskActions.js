import axios from 'axios'
import { ADD_TASK, REMOVE_TASK, TASKS_LOADED } from '../utils/actionTypes'
import { baseUrl } from '../config/api'

const apiUrl = baseUrl + '/tasks'

export function addTaskAction(formData) {
  return (dispatch) => {
    formData.completed = false
    formData.date = new Date()

    axios.post(apiUrl, formData)
      .then((result) => {
        dispatch({
          type: ADD_TASK,
          task: result.data
        })
      })
  }
}

export function removeTaskAction(id) {
  return (dispatch) => {
    axios.delete(apiUrl + '/' + id)
      .then(() => {
        dispatch({
          type: REMOVE_TASK,
          id
        })
      })
  }
}

export function getTasksAction() {
  return (dispatch) => {    
    axios.get(apiUrl)
      .then((result) => {            
        dispatch({
          type: TASKS_LOADED,
          tasks: result.data
        })
      }).catch((err) => {
        console.log(err)
      })
  }
}