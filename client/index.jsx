import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './js/reducers'
import './styles/styles.less'

import {WrappedLanguage as Language} from './jsx/language'
import Account from './jsx/account'
import App from './jsx/app'

let store = createStore(reducers);

const noMatchRedirect = function(nextState, replace) {
    replace('/account');
  },
  requireAuth = function(nextState, replace) {
    // redirectToAccount
  };

ReactDOM.render((
  <Provider store={store}>
    <Language>
      <Router history={browserHistory}>
        <Route path="/" onEnter={noMatchRedirect}/>
        <Route path="/">
          <Route path="account" component={Account}/>
          <Route path="manager" component={App} onEnter={requireAuth}/>
        </Route>
        <Route path="*" onEnter={noMatchRedirect}/>
      </Router>
    </Language>
  </Provider>
), document.getElementById('app'));
