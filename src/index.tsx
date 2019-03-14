import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import StatefulHello from './containers/StatefulHello';
import { createStore, compose, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<StoreState, any, any, any>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
  },
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <StatefulHello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
