import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNoteMutation($id: ID!) {
    deleteNote(
      id: $id,
    ) {
      id
    }
  }
`

const NoteWrapper = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  &:not(:last-child) {
    border-bottom: 1px solid #108EE9;
  }
`;

const DeleteButton = styled.div`
  padding: 8px;
  border-radius: 4px;
  color: #ECF6FD;
  background-color: #108EE9;
  transition: opacity 0.15s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

class Note extends PureComponent {
  deleteNote = () => {
    const { note, deleteNoteMutation } = this.props;
    const { id } = note;

    deleteNoteMutation({
      variables: {
        id,
      },
      update: (store, { data: { deleteNote } }) => {
        this.props.handleDelete(store, deleteNote, id);
      }
    });
  }

  render() {
    const { title, description } = this.props.note;
    return (
      <Wrapper>
        <NoteWrapper>
          <div>title: {title}</div>
          <div>description: {description}</div>
        </NoteWrapper>
        <DeleteButton onClick={this.deleteNote}>
          刪除
        </DeleteButton>
      </Wrapper>
    )
  }
}

export default graphql(DELETE_NOTE_MUTATION, { name: 'deleteNoteMutation' })(Note);
