import * as types from '../actions/action-types';

export function getUsersSuccess(users) {
  // console.log("users VVVVVVVVVVVVVVVVVV:", users)
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function deleteUserSuccess(userId) {
  return {
    type: types.DELETE_USER_SUCCESS,
    userId
  };
}

export function userShowSuccess(user) {
  return {
    type: types.USER_SHOW_SUCCESS,
    user
  };
}