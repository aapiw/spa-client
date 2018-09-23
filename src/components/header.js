import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
render() {
  return (
    <header>
    	<nav>
    		<li><Link to='/'>Home</Link></li>
    		<li><Link to='/users'>Users</Link></li>
    	</nav>
    </header>
  );
  }
}

export default Header;