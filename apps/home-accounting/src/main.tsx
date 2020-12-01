import { store } from '@app/redux';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '@app/components/Page/components/Theme';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="...loading">
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
