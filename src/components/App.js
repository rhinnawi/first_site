import '../styles/App.css';
import { Route, Switch } from 'react-router';
import HomePage from './HomePage'
import Header from './Header'
import Footer from './Footer'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <Header />
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
