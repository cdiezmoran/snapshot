import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { SnapshotApp } from './components/app';
import  WelcomeComponent  from './components/welcome';
import  OrganizationsComponent  from './components/organizations';
import  PersonsComponent  from './components/persons';

import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  render(
    (<Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SnapshotApp}>
          <IndexRoute component={WelcomeComponent} />
          <Route path="organization" component={OrganizationsComponent}>
            <Route path=":id"></Route>
          </Route>
          <Route path="person" component={PersonsComponent}>
            <Route path=":id"></Route>
          </Route>
        </Route>
      </Router>
    </Provider>),
    document.getElementById('app')
  )
})

