// Needed for redux-saga es6 generator support
import 'babel-polyfill'
// Import all the third party stuff
import React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import reactTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
reactTapEventPlugin()
// Import root app
import App from './containers/App'

// Import selector for `syncHistoryWithStore`
import { makeSelectLocationState } from './containers/App/selectors'

import configureStore from './store'

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)

const Root = () => (
  <MuiThemeProvider>
    <Provider store={ store } >
      <ConnectedRouter history={history} >
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
)

export default Root
