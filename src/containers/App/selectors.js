import { createSelector } from 'reselect'

const selectGlobal = (state) => state.get('global')

const makeSelectWritePad = createSelector(
  selectGlobal,
  appState => appState.get('writePad')
)

const makeSelectNewsFeed = createSelector(
  selectGlobal,
  appState => appState.get('newsFeed')
)

const makeSelectMusicTime = createSelector(
  selectGlobal,
  appState => appState.get('musicTime')
)

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS()
    }
    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  makeSelectWritePad,
  makeSelectNewsFeed,
  makeSelectMusicTime,
  makeSelectLocationState
}
