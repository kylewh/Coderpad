import * as actionTypes from './constant/'

export const togglePreview = () => ({
  type: actionTypes.TOGGLE_PREVIEW,
})

export const editMarkdown = (value) => ({
  type: actionTypes.EDIT_MARKDOWN,
  payload: value
})

export const toggleSaveFile = () => ({
  type: actionTypes.TOGGLE_SAVEFILE,
})

export const saveNewFile = (id, name, textValue) => {
  localStorage.setItem(id, JSON.stringify({name, textValue}))
  return ({
    type: actionTypes.SAVE_NEWFILE,
    id: id,
    name: name,
    textValue: textValue
  })
}
