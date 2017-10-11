import React, { Component } from 'react';
import styled from 'styled-components';
import NoteEditor from '../../containers/NoteEditor';
import NoteList from '../../components/NoteList';

const Wrapper = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NoteList />
        <NoteEditor />
      </Wrapper>
    );
  }
}

export default App;
