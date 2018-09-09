import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import { Routes } from '../config';
import { getCurrentBreakpoint, renderRoute } from './utilities';
import './App.css';

class App extends Component {
  static propTypes = {
    updateResponsiveBreakpoint: PropTypes.func.isRequired,
  };

  onResize = this.onResize.bind(this);

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', debounce(this.onResize, 200));
  }

  onResize() {
    this.props.updateResponsiveBreakpoint({
      breakpoint: getCurrentBreakpoint({ screenWidth: window.innerWidth }),
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {Object.values(Routes).map(renderRoute)}
      </div>
    );
  }
}

export default App;
