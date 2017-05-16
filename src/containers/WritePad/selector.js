import { createSelector } from 'reselect'
import { makeSelectWritePad } from '../App/selectors'

export const makeSelectEditor = createSelector(
  makeSelectWritePad,
  writePadState => writePadState.get('editor')
)

export const makeSelectAmbientSound = createSelector(
  makeSelectWritePad,
  writePadState => writePadState.get('ambientSound')
)
