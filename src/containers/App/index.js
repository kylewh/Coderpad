import React from 'react'
import { Route } from 'react-router-dom'
import WritePad from '../WritePad/'
import NewsFeed from '../NewsFeed/'
import NavBtn from '../../components/NavBtn'
import DashBoard from '../DashBoard/'
import './Global.scss'


const App = () => {
  return (
    <div>
      <NavBtn/>
      <Route exact path='/' component={DashBoard}/>
      <Route path='/write' component={WritePad}/>
      <Route path='/news' component={NewsFeed}/>
    </div>
  )
}

export default App
