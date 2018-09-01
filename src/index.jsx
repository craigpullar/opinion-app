import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import './index.css';
import { initFirebase, ReduxAppStore } from './config';
import registerServiceWorker from './registerServiceWorker';

initFirebase();

const AppRender = () => (
  <Provider store={ReduxAppStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<AppRender />, document.getElementById('root'));
registerServiceWorker();
