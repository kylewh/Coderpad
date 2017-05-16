import React, {Component} from 'react'
import {connect} from 'react-redux'
import { makeSelectTextValue, makeSelectIsPreview, makeSelectIsSaving } from
'./selector'
import * as editorActions from './action'
import _ from 'lodash'
import marked from 'marked'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Wrapper from './Wrapper'
import AutoSizeTextarea from './Textarea'
import EditorPanel from './EditorPanel'
import Preview from 'material-ui/svg-icons/action/visibility'
import Save from 'material-ui/svg-icons/content/archive'
import SaveFileModal from './SaveFileModal'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.prefix = 'coderPad'
    this._onChange = _.debounce(this._onChange, 500)
  }

  componentWillMount() {
    this._initHighLight()
  }
  componentDidMount() {
    this.textarea.value = this._loadLocal()
      ? this._loadLocal()
      : this.props.textValue
    // Forced synchronization between state&LocalStorage
    this.props.editMarkdown(this.textarea.value)
  }

  _initHighLight() {
    const hlScript = document.createElement('script')
    hlScript.type = 'text/javascript'
    hlScript.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min.js'
    document.getElementsByTagName('head')[0].appendChild(hlScript)
    hlScript.onload = function () {
      window.hljs.initHighlightingOnLoad()
      console.log('%c HilghtJS initiaized', 'color: #8bc34a; font-weight: bold;')
    }
  }

  _loadLocal = () => {
    return localStorage.getItem(this.prefix)
  }

  _onChange = () => {
    const result = this.textarea.value
    localStorage.setItem(this.prefix, result)
    this.props.editMarkdown(result)
  }

  render() {
    const {
      isPreview,
      isSaving,
      textValue,
      editMarkdown,
      toggleSaveFile,
      togglePreview,
      saveNewFile
    } = this.props

    const markdownCls = classNames({
      'preview-toggle': isPreview,
      'markdown': true
    })

    const previewCls = classNames({
      'preview-toggle': !isPreview,
      'markdown': true
    })

    const previewIconCls = classNames({active: isPreview})
    const saveIconCls = classNames({active: isSaving})

    return (
      <Wrapper>
        {/* Markdown */}
        <AutoSizeTextarea
          className={markdownCls}
          inputRef={node => this.textarea = node}
          onChange={this._onChange}
        />
        {/* Preview */}
        <div
          className={previewCls}
          dangerouslySetInnerHTML={{
            __html: marked(textValue)
          }}
        >
        </div>
        {/* Editor tools panel */}
        <EditorPanel>
          <Preview
            className={previewIconCls}
            onClick={togglePreview}
          />
          <Save
            className={saveIconCls}
            onClick={toggleSaveFile}
          />
        </EditorPanel>
        {/* Modal: enter filename */}
        <SaveFileModal
          isSaving={isSaving}
          onSave={saveNewFile}
          onCancel={toggleSaveFile}
          textValue={textValue}
        />
      </Wrapper>
    )
  }
}

Editor.propTypes = {
  textValue: PropTypes.string,
  togglePreview: PropTypes.func,
  isPreview: PropTypes.bool,
  isSaving: PropTypes.bool,
  editMarkdown: PropTypes.func,
  toggleSaveFile: PropTypes.func,
  saveNewFile: PropTypes.func
}

const mapStateToProps = (state) => ({
  textValue: makeSelectTextValue(state),
  isPreview: makeSelectIsPreview(state),
  isSaving: makeSelectIsSaving(state)
})

export default connect(
  mapStateToProps,
  editorActions
)(Editor)
