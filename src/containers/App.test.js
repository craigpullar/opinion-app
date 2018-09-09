import React from 'react';
import ReactDOM from 'react-dom';
import passPropsWithRouter from '../utilities/pass-props-with-router';
import App from './App';

describe('App Container', () => {
  const containerProps = {
    currentBreakpoint: 'mobile',
    updateResponsiveBreakpoint: () => {},
  };

  const WrappedApp = passPropsWithRouter({ componentToWrap: App });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedApp {...containerProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
