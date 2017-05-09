/* eslint-disable */
/* Package */
import React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { injectGlobal } from 'styled-components'
import reactTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/* Local*/
import App from './App'
/* eslint-enable */
import configureStore from '../configureStore'

reactTapEventPlugin()

export const history = createHistory()

const Root = () => (
  <MuiThemeProvider>
    <Provider store={ configureStore() } >
      <ConnectedRouter history={history} >
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
)

export default Root
