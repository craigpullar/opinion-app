import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
import debounce from 'debounce';
import { Routes } from "../config";
import { getCurrentBreakpoint } from './utilities';
import './App.css';

const renderRoute = ({ url, container: Container }) => <Route path={url} render={() => <Container />} />;

class App extends Component {

  static propTypes = {
    updateResponsiveBreakpoint: PropTypes.func.isRequired,
    currentBreakpoint: PropTypes.string.isRequired
  };
  
  onResize = this.onResize.bind(this);

  componentDidMount() {
    window.addEventListener('resize', debounce(this.onResize, 200));
  }

  onResize() {
    this.props.updateResponsiveBreakpoint({
      breakpoint: getCurrentBreakpoint({ screenWidth: window.innerWidth })
    });
  }



  render() {
    console.log(this.props.currentBreakpoint)
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
