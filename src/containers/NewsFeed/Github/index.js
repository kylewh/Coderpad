import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { makeSelectGithub } from '../selector'
import ContentLoader from 'react-content-loader'
import Repo from './components/Repo'
import UL from './styled/UL'

class Github extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.loadGithub()
  }

  render () {
    return (
      <UL>
        <h2>Github Trending</h2>
        {!this.props.repos.length
          ? <ContentLoader
            type='facebook'
            style={{ alignSelf: 'flex-start', width: '50vw' }}
            />
          : this.props.repos.map(repo => <Repo repo={repo} key={repo.url} />)}
      </UL>
    )
  }
}

Github.propTypes = {
  loadGithub: PropTypes.func,
  repos: PropTypes.array
}

const mapDispatchToProps = dispatch => ({
  loadGithub: () => dispatch({ type: 'LOAD_GITHUB' })
})

const mapStateToProps = state => ({
  repos: makeSelectGithub(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Github)
