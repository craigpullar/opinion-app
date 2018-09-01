import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers';
import './index.css';
import { initFirebase, ReduxAppStore } from './config';
import registerServiceWorker from './registerServiceWorker';
import { getCurrentBreakpoint } from './containers/utilities';

initFirebase();

const AppRender = () => (
  <BrowserRouter>
    <Provider store={ReduxAppStore}>
      <App initialBreakpoint={getCurrentBreakpoint({ screenWidth: window.innerWidth })} />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<AppRender />, document.getElementById('root'));
registerServiceWorker();
