import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../utils/actionTypes'

export function loginAction(credentials) {
  localStorage.setItem('user', credentials.username)
  return {
    type: USER_LOGGED_IN,
    user: credentials.username
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
    const user = localStorage.getItem('user')
    if(user) {
      dispatch(loginAction({ username: user }))
    }
  } 
}