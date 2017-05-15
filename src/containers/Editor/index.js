import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { makeSelectTextValue, makeSelectIsPreview, makeSelectIsSaving } from
'../../reducers/selectors'
import marked from 'marked'
import Wrapper from './Wrapper'
import AutoSizeTextarea from './Textarea'
import EditorPanel from './EditorPanel'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/visibility'
import DownLoad from 'material-ui/svg-icons/content/archive'
import { togglePreview, editMarkdown, toggleSaveFile, saveNewFile } from '../../actions/'
import classNames from 'classnames'
import _ from 'lodash'
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
    this._initState(this.textarea.value)
  }

  _initState(val) {
    this.props.editMarkdown(val)
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
    const {togglePreview, isPreview, isSaving, textValue, editMarkdown, toggleSaveFile, saveNewFile } = this.props
    return (
      <Wrapper>
        <AutoSizeTextarea
          inputRef={node => this.textarea = node}
          className={classNames({
            'preview-toggle': isPreview,
            'markdown': true
          })}
          onChange={this._onChange}/>
        <div
          dangerouslySetInnerHTML={{ __html: marked(textValue) }}
          className={classNames({
            'preview-toggle': !isPreview,
            'markdown': true
          })}
        >
        </div>
        <EditorPanel>
          <ActionFlightTakeoff
            onClick={togglePreview}
            className={classNames({active: isPreview})}
          />
          <DownLoad
            onClick={toggleSaveFile}
            className={classNames({active: isSaving})}
          />
        </EditorPanel>
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
  {
    togglePreview,
    editMarkdown,
    toggleSaveFile,
    saveNewFile
  }
)(Editor)
