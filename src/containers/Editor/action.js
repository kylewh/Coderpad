import * as actionTypes from '../App/constant'

const togglePreview = () => ({
  type: actionTypes.TOGGLE_PREVIEW
})

const editMarkdown = value => ({
  type: actionTypes.EDIT_MARKDOWN,
  payload: value
})

const toggleSaveFile = () => ({
  type: actionTypes.TOGGLE_SAVEFILE
})

const toggleBrowse = () => ({
  type: actionTypes.TOGGLE_BROWSE
})

const saveNewFile = (name, textValue) => {
  let finalName = 'coderPad-' + name

  localStorage.setItem(finalName, textValue)
  const payload = {
    name,
    textValue
  }

  return {
    type: actionTypes.SAVE_NEWFILE,
    name: finalName,
    textValue: textValue
  }
}

const removeFile = fileName => {
  localStorage.removeItem(fileName)
  return {
    type: actionTypes.REMOVE_FILE,
    name: fileName
  }
}

const loadLocalFiles = () => {
  let localSavedFiles = {}
  for (let name in localStorage) {
    if (name.indexOf('coderPad') > -1) {
      localSavedFiles[name] = localStorage.getItem(name)
    }
  }
  return {
    type: actionTypes.LOAD_LOCALFILES,
    payload: localSavedFiles
  }
}

export {
  toggleBrowse,
  togglePreview,
  editMarkdown,
  toggleSaveFile,
  saveNewFile,
  loadLocalFiles,
  removeFile
}
