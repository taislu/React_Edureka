import axios from 'axios'

import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../utils/actionTypes'
import { baseUrl } from '../config/api'

export function loginAction(credentials) {
  return (dispatch) => {
    return axios.post(baseUrl + '/login', credentials)
      .then((user) => dispatch(userLoggedInAction(user.data)))
  }
}

export function userLoggedInAction(user) {
  localStorage.setItem('user', JSON.stringify(user))
  return {
    type: USER_LOGGED_IN,
    user
  }
}

export function logoutAction() {
  localStorage.removeItem('user')
  return {
    type: USER_LOGGED_OUT
  }
}

export function checkUserAction() {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      dispatch(userLoggedInAction(user))
    }
  } 
}