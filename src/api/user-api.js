import axios from 'axios';
import store from '../store';
import { getUsersSuccess, deleteUserSuccess, userShowSuccess } from '../actions/user-actions';

// Get all users
export function getUsers() {
  return axios.get('http://localhost:3000/api/v1/users?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MzgyOTMwNTN9.g3SR4NqQ3s7Rq5RzPH7UclrnbqDXquCNfVI8WDjMzIs')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data.data));
      // return response;
    });
}

// Filter users
export function searchUsers(query = '') {
  return axios.get('http://localhost:3000/api/v1/users?q='+ query)
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

// Delete a user
export function deleteUser(userId) {
  return axios.delete('localhost:3000/api/v1/users/'+userId+'/?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1Mzc4NTgxMTR9.G_zxLmMrWaIUOARCFQb1FUzhX6p4cU76Ze-3D9oUupY')
    .then(response => {
      store.dispatch(deleteUserSuccess(userId));
      // return response;
    });
}

export function getUser(userId) {
  return axios.get('http://localhost:3000/api/v1/users/'+userId+'/?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1Mzc4NTgxMTR9.G_zxLmMrWaIUOARCFQb1FUzhX6p4cU76Ze-3D9oUupY')
    .then(response => {
      store.dispatch(userShowSuccess(response.data.data));
    });
}

