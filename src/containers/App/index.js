import React, { Component } from 'react';
import styled from 'styled-components';
import NoteListLoadable from '../../containers/NoteList/Loadable';
import NoteEditorLoadable from '../../containers/NoteEditor/Loadable';

const Wrapper = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NoteListLoadable />
        <NoteEditorLoadable />
      </Wrapper>
    );
  }
}

export default App;
