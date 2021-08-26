import React from 'react';
import './styles/index.css';
import App from './components/App';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
