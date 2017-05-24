import { createSelector } from "reselect";
import Immutable from "immutable";
import { combineReducers } from "redux-immutable";
import * as actionTypes from "../App/constant";
import ambientSound from "../Embient/reducer";

const initialText = `## Welcome    

Hi, I am distraction-free text editor :)    

Features:    
- Support markdown syntax
- Automatically save current text for you
- Save / Download file`;

const initialState = Immutable.fromJS({
  textValue: initialText,
  isPreview: false,
  isSaving: false,
  isBrowsing: false,
  savedFiles: {}
});

const editor = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_PREVIEW:
      return state.update("isPreview", isPreview => !isPreview);
    case actionTypes.TOGGLE_SAVEFILE:
      return state.update("isSaving", isSaving => !isSaving);
    case actionTypes.TOGGLE_BROWSE:
      return state.update("isBrowsing", isBrowsing => !isBrowsing);
    case actionTypes.EDIT_MARKDOWN:
      return state.set("textValue", action.payload);
    case actionTypes.SAVE_NEWFILE:
      console.log(action.textValue);
      return state.setIn(["savedFiles", action.name], {
        textValue: action.textValue
      });
    case actionTypes.LOAD_LOCALFILES:
      // pitfall alert: ensure that your value is immutable type
      return state.set("savedFiles", Immutable.fromJS(action.payload));
    default:
      return state;
  }
};

export default editor;
