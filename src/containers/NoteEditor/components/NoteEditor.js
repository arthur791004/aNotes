import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from 'draft-js-plugins-editor';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import debounce from 'lodash/debounce';

const Wrapper = styled.div`
  width: 25vw;
  margin: 0 10px;
  background-color: #FEFEFE;
`;

class NoteEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentNote) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(nextProps.currentNote, 'content')) {
      const content = convertFromRaw(JSON.parse(nextProps.currentNote.content));
      this.setState({
        editorState: EditorState.createWithContent(content),
      });
    }
  }

  saveNote = debounce((content) => {
    const { currentNote, updateNote } = this.props;
    const rawContent = convertToRaw(content);
    const [titleBlocks, ...descriptionBlocks] = rawContent.blocks;
  }, 5000);

  onChange = (editorState) => {
    const content = editorState.getCurrentContent();

    this.setState({
      editorState,
    }, () => this.saveNote(content));
  };

  render() {
    const { currentNote } = this.props;

    return (
      <Wrapper>
        {currentNote ? (
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        ) : (
          <div>Please select a note...</div>
        )}
      </Wrapper>
    );
  }
}

export default NoteEditor;
