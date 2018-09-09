import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default ({ ComponentToWrap }) => {
  class WrappedComponent extends Component {
    state = {}

    render() {
      return (
        <BrowserRouter>
          <ComponentToWrap {...this.props} />
        </BrowserRouter>
      );
    }
  }

  return WrappedComponent;
};
