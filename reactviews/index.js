import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { SnapshotApp } from './components/app';
import  Welcome  from './components/welcome';
import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  render(
    (<Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SnapshotApp}>
          <IndexRoute component={Welcome} />
          <Route path="people" component={Welcome}>
            <Route path=":id"></Route>
          </Route>
        </Route>
      </Router>
    </Provider>),
    document.getElementById('app')
  )
})

