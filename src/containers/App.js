/* eslint-disable */
import React from 'react'
import { Route } from 'react-router-dom'
import WritePad from './WritePad'
import NewsFeed from './NewFeed'
/* eslint-disable */

const App = () => {
  return (
    <div className='App'>
      <Route path='/write' component={WritePad} />
      <Route path='/news' component={NewsFeed} />
    </div>
  )
}

export default App
