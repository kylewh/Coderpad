import { createSelector } from 'reselect'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import * as actionTypes from '../App/constant'
import editor from '../Editor/reducer'
import ambientSound from '../Embient/reducer'

const writePad = combineReducers({
  editor,
  ambientSound
})

export default writePad
