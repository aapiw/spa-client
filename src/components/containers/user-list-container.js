import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
// import store from '../../store';

class UserListContainer extends Component {
  componentDidMount(){
    userApi.getUsers();
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
          <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
      </div>
    );
   }
}

const mapStateToProps = function(state) {
  return {
    users: state.userState.users.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
