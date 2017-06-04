import { createSelector } from 'reselect'
import { makeSelectEditor } from '../WritePad/selector'

export const makeSelectIsPreview = createSelector(
  makeSelectEditor,
  editorState => editorState.get('isPreview')
)

export const makeSelectIsSaving = createSelector(
  makeSelectEditor,
  editorState => editorState.get('isSaving')
)

export const makeSelectIsBrowsing = createSelector(
  makeSelectEditor,
  editorState => editorState.get('isBrowsing')
)

export const makeSelectTextValue = createSelector(
  makeSelectEditor,
  editorState => editorState.get('textValue')
)

export const makeSelectSavedFiles = createSelector(
  makeSelectEditor,
  editorState => editorState.get('savedFiles')
)
