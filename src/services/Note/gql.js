export const GET_NOTES = `
  query getNotes {
    allNotes {
      id
      createdAt
      title
      description
    }
  }
`;

export const GET_NOTE = `
  query getNote($id: ID!) {
    Note(
      id: $id,
    ) {
      id
      content
    }
  }
`;

export const CREATE_NOTE = `
  mutation createNote($title: String, $description: String) {
    createNote(
      title: $title,
      description: $description,
    ) {
      id
      updatedAt
      title
      description
    }
  }
`;

export const UPDATE_NOTE = `
  mutation updateNote($id: ID!, $title: String, $description: String, $content: String) {
    updateNote(
      id: $id,
      title: $title,
      description: $description,
      content: $content,
    ) {
      id,
      updatedAt,
      title,
      description,
      content,
    }
  }
`;

export const DELETE_NOTE = `
  mutation DeleteNoteMutation($id: ID!) {
    deleteNote(
      id: $id,
    ) {
      id
    }
  }
`;
