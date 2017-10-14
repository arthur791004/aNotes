import asyncInjectors from '../../utils/asyncInjectors';
import reducer from './reducer';

const { injectReducer } = asyncInjectors;

const asyncLoaders = [
  injectReducer({ name: 'noteEditor', reducer }),
];

export default asyncLoaders;
