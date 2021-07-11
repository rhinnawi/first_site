import '../styles/App.css';
import { Route, Switch } from 'react-router';
import HomePage from './HomePage'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
