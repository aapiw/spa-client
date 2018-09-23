import React from 'react';
import { connect } from 'react-redux';
import UserShow from '../views/user-show';
import * as userApi from '../../api/user-api';

const UserShowContainer = React.createClass({

  componentDidMount: function() {
    let userId = this.props.params.userId
    userApi.getUser(userId)
  },

  render: function() {
    return (
      <UserShow {...this.props.user} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    // profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)(UserShowContainer);
