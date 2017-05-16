import * as actionTypes from '../App/constant'

const togglePreview = () => ({
  type: actionTypes.TOGGLE_PREVIEW,
})

const editMarkdown = (value) => ({
  type: actionTypes.EDIT_MARKDOWN,
  payload: value
})

const toggleSaveFile = () => ({
  type: actionTypes.TOGGLE_SAVEFILE,
})

const saveNewFile = (id, name, textValue) => {
  localStorage.setItem(id, JSON.stringify({name, textValue}))
  return ({
    type: actionTypes.SAVE_NEWFILE,
    id: id,
    name: name,
    textValue: textValue
  })
}

export {
  togglePreview,
  editMarkdown,
  toggleSaveFile,
  saveNewFile,
}
