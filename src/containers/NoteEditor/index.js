import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NoteEditor from './components/NoteEditor';
import asyncLoaders from './asyncLoaders';
import {
  makeSelectCurrentNote,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  currentNote: makeSelectCurrentNote(),
});

const mapDispatchToProps = dispatch => ({

});

export default compose(
  ...asyncLoaders,
  connect(mapStateToProps, mapDispatchToProps),
)(NoteEditor);
