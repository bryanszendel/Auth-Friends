import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './components/Login'
import FriendList from './components/FriendList'
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navlinks">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/add">Add Friend</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendList} />
        <PrivateRoute exact path="/add" component={AddFriend} />
      </div>
    </Router>
  );
}

export default App;
