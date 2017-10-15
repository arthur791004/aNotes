import asyncInjectors from '../../utils/asyncInjectors';
import reducer from './reducer';

const asyncLoaders = [
  asyncInjectors({ name: 'noteEditor', reducer }),
];

export default asyncLoaders;
