import React from 'react';
import ReactDOM from 'react-dom';
import { SnapshotApp } from './components/app';
import { Welcome } from './components/welcome';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<SnapshotApp />, document.getElementById('app'));
});

/*
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={SnapshotApp}>
          <IndexRoute component={Welcome} />
          <Route path="people" component={Welcome}>
            <Route path=":id"></Route>
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
*/
