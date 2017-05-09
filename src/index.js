/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  /* eslint-disbale no-undef */
  document.getElementById('root')
  /* eslint-enable no-undef */
)

module.hot.accept()
