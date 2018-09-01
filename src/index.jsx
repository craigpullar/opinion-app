import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers';
import './index.css';
import { initFirebase, ReduxAppStore } from './config';
import registerServiceWorker from './registerServiceWorker';

initFirebase();

console.log(ReduxAppStore.getState());

const AppRender = () => (
    <BrowserRouter>
  <Provider store={ReduxAppStore}>

      <App />
  </Provider>

    </BrowserRouter>
);

ReactDOM.render(<AppRender />, document.getElementById('root'));
registerServiceWorker();
