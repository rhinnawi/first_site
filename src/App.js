import "./styles/App.css";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurStack from "./pages/OurStack";
import ContactUs from "./pages/ContactUs";

/**
 * Primary entry point for React application. Also contains all client-side
 * routing and base structure for website.
 * @component
 */
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/stack" component={OurStack} />
          <Route path="/contact" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
