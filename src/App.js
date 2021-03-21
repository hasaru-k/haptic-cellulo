import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import RobotDisplay from './components/RobotDisplay';

let url = "http://cellulo-live.herokuapp.com/pose";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <RobotDisplay></RobotDisplay>
            </div>
            <div className="col-sm">
              <RobotDisplay></RobotDisplay>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
