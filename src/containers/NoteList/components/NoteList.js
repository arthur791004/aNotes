import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Note from '../../../components/Note';
import CreateNoteButton from './CreateNoteButton';

const NoteListContainer = styled.div`
  margin: 10px 0;
  border: 1px solid #108EE9;
`;

class NoteList extends PureComponent {
  handleCreate = () => {

  }

  handleDelete = (store, deleteNote, noteId) => {

  }

  handleSelect = noteID => () => {
    this.props.selectNote(noteID);
  }

  render() {
    const allNotes = [];

    return (
      <div>
        <CreateNoteButton handleCreate={this.handleCreate} />
        <NoteListContainer>
          {allNotes.map(note => (
            <Note
              key={note.id}
              note={note}
              handleSelect={this.handleSelect(note.id)}
              handleDelete={this.handleDelete}
            />
          ))}
        </NoteListContainer>
      </div>
    );
  }
}

export default NoteList;
