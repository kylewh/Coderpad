/* eslint-disable */
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import WritePad from '../WritePad/'
import NewsFeed from '../NewsFeed/'
import styled, {injectGlobal} from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FullScreenContainer from '../../styledComponents/FullScreenContainer'
import NavBtn from '../../styledComponents/NavBtn'
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
