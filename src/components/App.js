import logo from './logo.svg';
import '../styles/App.css';
import { Route, Switch } from 'react-router';
import HomePage from './HomePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
