import '../styles/App.css';
import { Route, Switch } from 'react-router';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />

      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
