import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import RobotDisplay from './components/RobotDisplay';
import { render } from '@testing-library/react';

function getQuery(query) {
  return new URLSearchParams(window.location.search).get(query);
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p></p>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <RobotDisplay queryRobot={getQuery('left')}></RobotDisplay>
              </div>
              <div className="col-sm">
                <RobotDisplay queryRobot={getQuery('right')}></RobotDisplay>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
