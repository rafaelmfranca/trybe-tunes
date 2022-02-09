import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/favorites" component={ Favorites } />
          <Route
            path="/album/:id"
            render={ ({ match: { params } }) => <Album { ...params } /> }
          />
          <Route path="/search" component={ Search } />
          <Route exact path="/trybe-tunes" component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
