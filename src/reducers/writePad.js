import { createSelector } from 'reselect'
import Immutable from 'immutable' 
import * as actionTypes from '../actions/constant/'

const initialText =
  `## Welcome
  Hi, I am distraction-free text editor :)
You can write plain text or using markdown syntax, we will automatically save the text for you.
  `

const initialState = Immutable.fromJS({
  textValue: initialText,
  isPreview: false,
  isSaving: false,
  savedFiles: {},
})


const writePad = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_PREVIEW:
      return state.update('isPreview', (isPreview) => !isPreview )
    case actionTypes.EDIT_MARKDOWN:
      return state.set('textValue', action.payload)
    case actionTypes.TOGGLE_SAVEFILE:
      return state.update('isSaving',(isSaving) => !isSaving )
    case actionTypes.SAVE_NEWFILE:
      return state.setIn(['savedFile', action.id], {
        name: action.name,
        textValue: action.textValue
      })
    default:
      return state
  }
}

export default writePad

