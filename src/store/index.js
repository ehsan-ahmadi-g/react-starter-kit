import { useMemo } from 'react';
import { init } from '@rematch/core';
import createPersistPlugin, { getPersistor } from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
// import storage from 'redux-persist/lib/storage';

import storage from './dynamic-storage';
import * as models from '../models';

let store;

const exampleInitialState = {};

const persistPlugin = createPersistPlugin({
  version: 2,
  storage,
  blacklist: [],
});
const loadingPlugin = createLoadingPlugin({});

export const initStore = (initialState = exampleInitialState) =>
  init({
    models,
    redux: {
      initialState,
    },
    plugins: [loadingPlugin, persistPlugin],
  });

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  const persistor = getPersistor();
  const { dispatch } = _store;

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return { store: _store, dispatch, persistor };
  // Create the store once in the client
  if (!store) store = _store;

  return { store: _store, dispatch, persistor };
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
