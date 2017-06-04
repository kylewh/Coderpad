import React from 'react'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'
import { HackerNewsIcon, GitHubIcon, V2exIcon } from './Icon'
import LINK from './LINK'
import PropTypes from 'prop-types'

const NavLink = ({ filter }) => {
  const mapFilterToItemConfig = () => {
    switch (filter) {
      case 'hackernews':
        return {
          icon: <HackerNewsIcon />
        }
      case 'github':
        return {
          icon: <GitHubIcon />
        }
      case 'v2ex':
        return {
          icon: <V2exIcon />
        }
    }
  }

  const { label, icon } = mapFilterToItemConfig()

  return (
    <LINK
      to={!filter ? '/news/hackernews' : `/news/${filter}`}
      exact
      activeClassName={'btn-active'}
    >
      <BottomNavigationItem label={label} icon={icon} />
    </LINK>
  )
}

NavLink.propTypes = {
  filter: PropTypes.string
}

export default NavLink
