import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import RobotMap from './components/RobotMap';

let url = "http://cellulo-live.herokuapp.com/pose";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <RobotMap macAddress="00:1B:44:11:3A:B7"></RobotMap> 
        <RobotMap macAddress="00:1B:44:11:3A:B6"></RobotMap> 
      </header>
    </div>
  );
}

export default App;
