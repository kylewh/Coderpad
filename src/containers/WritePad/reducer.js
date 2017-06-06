import { combineReducers } from 'redux-immutable'
import editor from '../Editor/reducer'
import ambientSound from '../Embient/reducer'

const writePad = combineReducers({
  editor,
  ambientSound
})

export default writePad
