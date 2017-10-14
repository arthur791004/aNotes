import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectNote } from '../NoteEditor/actions';
import { makeSelectCurrentNoteID } from '../NoteEditor/selectors';
import asyncLoaders from './asyncLoaders';
import NoteList from './components/NoteList';

const mapStateToProps = createStructuredSelector({
  currentNoteID: makeSelectCurrentNoteID(),
});

const mapDispatchToProps = dispatch => ({
  selectNote: noteID => dispatch(selectNote(noteID)),
});

export default compose(
  ...asyncLoaders,
  connect(mapStateToProps, mapDispatchToProps),
)(NoteList);
