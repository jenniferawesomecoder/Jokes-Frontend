import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import history from './history';
import Nav from './components/Menu'
import Home from './components/Home'
import NewGroup from './components/NewGroup'
import JokesContainer from './components/JokesContainer'
import CollectionsContainer from './components/CollectionsContainer'
import GroupContainer from './components/GroupContainer'

// functional compoennt
const App = () => (
  <Router history={history}>
    <Nav />

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/new" component={NewGroup} />
      <Route exact path="/groups" component={GroupContainer} />
      <Route exact path="/all" component={JokesContainer}/>
      <Route exact path="/collections" component={CollectionsContainer}/>
    </Switch>
  </Router>
);

export default App;
