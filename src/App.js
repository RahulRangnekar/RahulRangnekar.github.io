import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from './containers/routes.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Routes} />
      </Router>
    );
  }
}

export default App;
