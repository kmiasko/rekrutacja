import React, { Component } from 'react';
import db from './utils/db';
import Inputs from './components/Inputs';
import DataTable from './components/DataTable';
import './App.scss';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Inputs />
          <DataTable />
        </div>
      </div>
    );
  }
}

export default App;
