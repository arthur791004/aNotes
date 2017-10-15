import checkStore from './checkStore';
import injectAsyncReducer from './injectAsyncReducer';
import injectAsyncEpics from './injectAsyncEpics';

export default function getAsyncInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectAsyncReducer(store, true),
    injectEpics: injectAsyncEpics(store, true),
  };
}