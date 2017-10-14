import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';

const Wrapper = styled.div`
  width: 25vw;
  margin: 0 10px;
  background-color: #FEFEFE;
`;

class NoteEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <Wrapper>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </Wrapper>
    );
  }
}

export default NoteEditor;
