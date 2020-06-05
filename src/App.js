import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import history from './history';
import Nav from './components/Menu'
import Home from './components/Home'
import GroupCreate from './components/GroupCreate'
import Jokes from './components/Jokes'
import Collections from './components/Collections'
import Groups from './components/Groups'

// functional compoennt
const App = () => (
  <Router history={history}>
    <Nav />

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/new" component={GroupCreate} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/all" component={Jokes}/>
      <Route exact path="/collections" component={Collections}/>
    </Switch>
  </Router>
);

export default App;
