import React from 'react'
import HeaderConatiner from '../../components/HeaderContainer'
import { BottomNavigation } from 'material-ui/BottomNavigation'
import { Route } from 'react-router-dom'
import NavLink from './NavLink'
import PropTypes from 'prop-types'

const Header = () => {
  return (
    <HeaderConatiner>
      <BottomNavigation>
        <NavLink filter='v2ex' />
        <NavLink filter='hackernews' />
        <NavLink filter='github' />
      </BottomNavigation>
    </HeaderConatiner>
  )
}

Header.propTypes = {
  match: PropTypes.object
}

export default Header
