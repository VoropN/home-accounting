import { store } from '@app/redux';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="...loading">
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
