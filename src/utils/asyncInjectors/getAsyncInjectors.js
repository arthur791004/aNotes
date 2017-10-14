import checkStore from './checkStore';
import injectAsyncReducer from './injectAsyncReducer';

export default function getAsyncInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectAsyncReducer(store, true),
  };
}