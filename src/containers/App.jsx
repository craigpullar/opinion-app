import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from "../config";
import './App.css';

const renderRoute = ({ url, container: Container }) => <Route path={url} render={() => <Container />} />;

class App extends Component {
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
