import "./styles/App.css";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import OurWorkflow from "./pages/OurWorkflow";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/workflow" component={OurWorkflow} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
