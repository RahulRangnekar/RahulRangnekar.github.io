import React from 'react';

// React Router
import { Switch, Route } from 'react-router-dom';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Containers
import Navbar from './Navbar.jsx';
// import Home from './Home.jsx';
// import Project from './Project.jsx';
// import Footer from './Footer.jsx';

export default class Routes extends React.Component {
  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <Navbar />
        <div className={css(styles.mainContainer)}>
          <Switch>
            {/* <Route exact path={'/'} component={Home} /> */}
            {/* <Route path={`/projects/:project_title`} component={Project} /> */}
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

const styles = StyleSheet.create({});
