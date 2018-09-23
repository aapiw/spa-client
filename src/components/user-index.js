import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from './users'
import User from './user'

const UserIndex = () => (
  <Switch>
    <Route exact path='/users' component={Users}/>
    <Route path='/users/:id' component={User}/>
  </Switch>
)
export default UserIndex