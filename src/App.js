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
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <RobotDisplay></RobotDisplay>
            </div>
            <div class="col-sm">
              <RobotDisplay></RobotDisplay>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
