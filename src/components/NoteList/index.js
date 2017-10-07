import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { graphql, gql, compose } from 'react-apollo';
import CreateNoteButton from './CreateNoteButton';
import Note from '../Note';

const ALL_NOTES_QUERY = gql`
  query AllNotesQuery {
    allNotes {
      id
      createdAt
      title
      description
    }
  }
`;

const CREATE_NOTE_MUTATION = gql`
  mutation CreateNoteMutation($title: String, $description: String) {
    createNote(
      title: $title,
      description: $description,
    ) {
      id
      createdAt
      title
      description
    }
  }
`;

const NoteListContainer = styled.div`
  margin: 10px 0;
  border: 1px solid #108EE9;
`;

class NoteList extends PureComponent {
  handleCreate = () => {
    this.props.createNoteMutation({
      update: (store, { data: { createNote } }) => {
        const data = store.readQuery({ query: ALL_NOTES_QUERY });

        data.allNotes = [
          createNote,
          ...data.allNotes,
        ];

        store.writeQuery({ query: ALL_NOTES_QUERY, data });
      }
    });
  }

  handleDelete = (store, deleteNote, noteId) => {
    const data = store.readQuery({ query: ALL_NOTES_QUERY });

    data.allNotes = data.allNotes.filter(note => note.id !== noteId);

    store.writeQuery({ query: ALL_NOTES_QUERY, data });
  }

  render() {
    const { loading, error, allNotes } = this.props.allNotesQuery;

    if (loading) {
      return <div>Loading</div>
    } else if (error) {
      return <div>Something wrong...</div>
    }

    return (
      <div>
        <CreateNoteButton handleCreate={this.handleCreate} />
        <NoteListContainer>
          {allNotes.map(note => (
            <Note key={note.id} note={note} handleDelete={this.handleDelete} />
          ))}
        </NoteListContainer>
      </div>
    );
  }
}

export default compose(
  graphql(ALL_NOTES_QUERY, { name: 'allNotesQuery' }),
  graphql(CREATE_NOTE_MUTATION, { name: 'createNoteMutation' })
)(NoteList);
