import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import UserListContainer from '../components/containers/user-list-container'

const Main = () => (
		<main>
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route path='/users' component={UserListContainer}></Route>
			</Switch>
		</main>
	)
export default Main