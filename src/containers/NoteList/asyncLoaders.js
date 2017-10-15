import asyncInjectors from '../../utils/asyncInjectors';
import asyncLoadersNoteEditor from '../NoteEditor/asyncLoaders';
import reducer from './reducer';

const asyncLoaders = [
  ...asyncLoadersNoteEditor,
  asyncInjectors({ name: 'noteList', reducer }),
];

export default asyncLoaders;
