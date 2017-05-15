import React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import reactTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from '../configureStore'
import App from './App/'
reactTapEventPlugin()

// In configureStore we need regiester it as parameter into middleware
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

module.hot.accept()
