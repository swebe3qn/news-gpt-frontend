import React from 'react';
import logo from './logo.png';
import './App.sass';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <Articles />
        <footer>
          <a href="https://instagram.com/weberstefan" target="_blank" rel="noopener noreferrer">Ein Projekt von SW</a>
          &nbsp;•&nbsp;
          <a href="https://webers.io/impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
