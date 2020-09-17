import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import './assets/styles/main.css';
import { initializeStore } from './store';
import routes from './routes';

function renderApp() {
  const { store, dispatch, persistor } = initializeStore();

  ensureReady(routes).then((data) =>
    hydrate(
      <BrowserRouter>
        <Provider store={store} dispatch={dispatch}>
          <PersistGate persistor={persistor}>
            <After data={data} routes={routes} store={store} />
          </PersistGate>
        </Provider>
      </BrowserRouter>,
      document.getElementById('root'),
    ),
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./routes', renderApp);
}
