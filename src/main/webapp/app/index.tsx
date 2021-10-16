import AppComponent from './app';
import ErrorBoundary from './shared/error/error-boundary';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { clearAuthentication } from './shared/reducers/authentication';
import getStore from './config/store';
import { loadIcons } from './config/icon-loader';
import { registerLocale } from './config/translation';
import setupAxiosInterceptors from './config/axios-interceptor';

const store = getStore();
registerLocale(store);

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

loadIcons();

const rootEl = document.getElementById('root');

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <div className="h-100 w-100">
          <Component />
        </div>
      </Provider>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
