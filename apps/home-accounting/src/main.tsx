import { store } from '@app/redux';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
