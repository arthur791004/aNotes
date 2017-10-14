import asyncInjectors from '../../utils/asyncInjectors';
import asyncLoadersNoteEditor from '../NoteEditor/asyncLoaders';
import reducer from './reducer';

const { injectReducer } = asyncInjectors;

const asyncLoaders = [
  ...asyncLoadersNoteEditor,
  injectReducer({ name: 'noteList', reducer }),
];

export default asyncLoaders;
