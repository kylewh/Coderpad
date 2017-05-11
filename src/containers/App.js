/* eslint-disable */
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import WritePad from './WritePad'
import NewsFeed from './NewsFeed'
import styled, {injectGlobal} from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FullScreenContainer from '../styledComponents/FullScreenContainer'
import NavBtn from '../styledComponents/NavBtn'
import DashBoard from '../components/DashBoard'
/* eslint-disable */

injectGlobal `
  html,
  body {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  body {
    font-family: "Helvetica Neue", "Arial", " Segoe UI", "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif !important;
  }
  
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    font-family: inherit;
  }
`

const App = () => {
  return (
    <FullScreenContainer>
      <NavBtn/>
      <Route exact path='/' component={DashBoard}/>
      <Route path='/write' component={WritePad}/>
      <Route path='/news' component={NewsFeed}/>
    </FullScreenContainer>
  )
}

export default App
