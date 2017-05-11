/* eslint-disable */
import React from 'react'
import AppBar from 'material-ui/AppBar'
import styled from 'styled-components'

const TopBar = styled((props) => <AppBar {...props} />)`
  background-color: #F5E1DA !important
`

const MyAppBar = () => (
  <TopBar
    title="Title"
  />
)

export default MyAppBar
