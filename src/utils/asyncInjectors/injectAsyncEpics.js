import invariant from 'invariant';
import checkStore from './checkStore';

export default function injectAsyncEpics(store, isValid) {
  return function injectEpics(asyncEpics) {
    if (!isValid) checkStore(store);

    invariant(
      Array.isArray(asyncEpics),
      '(app/utils...) injectAsyncEpics: Expected `asyncEpics` to be an array'
    );

    asyncEpics.forEach((asyncEpic) => {
      if (store.asyncEpics.includes(asyncEpic)) {
        return;
      }

      store.asyncEpics.push(asyncEpic);
      store.epic$.next(asyncEpic);
    });
  };
}