import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Accueil</h1>;
}

function About() {
  return <h1>À propos</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
        </header>
      </div>
      {/* <Switch> */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;