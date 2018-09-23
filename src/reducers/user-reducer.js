import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    users: [],
    userShow: {
        // repos: []
    }
};

const userReducer = function(state = initialState, action) {
	switch (action.type) {

	  case types.GET_USERS_SUCCESS:
	  	// console.log("action.users:", action.users)
      return Object.assign({}, state, { users: action.users });
      // return { users: action.users };

	  case types.DELETE_USER_SUCCESS:

	    // Use lodash to create a new user array without the user we want to remove
	    const newUsers = _.filter(state.users, user => user.id !== action.userId);
	    return Object.assign({}, state, { users: newUsers });

	  case types.USER_SHOW_SUCCESS:
      return Object.assign({}, state, { userShow: action.userShow });
	}
  return state;

}

export default userReducer;