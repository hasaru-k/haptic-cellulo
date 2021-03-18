import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

let url = "http://cellulo-live.herokuapp.com/pose";

function App() {

  const [poses, setPoses] = useState('');

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    setPoses(JSON.stringify(data));
  })
  .catch(function(error) {
    console.log(error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        {poses}
      </p>
    </div>
  );
}

export default App;
