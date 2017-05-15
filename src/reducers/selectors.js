import { createSelector } from 'reselect'

// another state is routing
export const selectApp = (state) => state.app

export const makeSelectWritePad = createSelector(
  selectApp,
  appState => appState.writePad
)

export const makeSelectTextValue = createSelector(
  makeSelectWritePad,
  writePadState => writePadState.get('textValue')
)

export const makeSelectIsPreview = createSelector(
  makeSelectWritePad,
  writePadState => writePadState.get('isPreview')
)

export const makeSelectIsSaving = createSelector(
  makeSelectWritePad,
  writePadState => writePadState.get('isSaving')
)

