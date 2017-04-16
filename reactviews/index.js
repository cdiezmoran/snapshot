import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { SnapshotApp } from './components/app';
import  WelcomeComponent  from './components/welcome';
import  OrganizationComponent  from './components/organization';
import  PersonComponent  from './components/person';

import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  render(
    (<Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SnapshotApp}>
          <IndexRoute component={WelcomeComponent} />
          <Route path="organization" component={OrganizationComponent}>
            <Route path=":id"></Route>
          </Route>
          <Route path="person" component={PersonComponent}>
            <Route path=":id"></Route>
          </Route>
        </Route>
      </Router>
    </Provider>),
    document.getElementById('app')
  )
})

