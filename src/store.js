import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/operator/mergeMap';
import Immutable, { fromJS } from 'immutable';
import createReducer from './reducers';
import initialEpics from './epics';

export default function configureStore(initialState) {
  const epic$ = new BehaviorSubject(initialEpics);
  const rootEpic = (action$, store) =>
    epic$.mergeMap(epic =>
      epic(action$, store)
    );
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const middlewares = [
    epicMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  /* istanbul ignore next */
  const composeEnhancers =
    (process.env.NODE_ENV !== 'production'
      && typeof window === 'object'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          serialize: {
            immutable: Immutable, // to enable immutable.js serialization
          },
          autoPause: true, // pause when the extension window is not opened
        })
        : compose);
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Async reducer registry
  store.asyncReducers = {};
  // Async epic registry
  store.epic$ = epic$;
  store.asyncEpics = [];

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers')
        .then(({ default: createReducers }) => {
          store.replaceReducer(createReducers(store.asyncReducers));
        });
    });
  }

  return store;
}