import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const CreateNoteButton = ({ handleCreate }) => {
  return (
    <Wrapper onClick={handleCreate}>
      新增筆記
    </Wrapper>
  );
};

export default CreateNoteButton;