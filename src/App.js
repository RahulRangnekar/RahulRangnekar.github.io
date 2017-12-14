import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';

import './app.css'

export default () => (
  <Router>
    <div>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
)
