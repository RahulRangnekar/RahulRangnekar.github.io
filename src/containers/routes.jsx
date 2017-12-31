import React from 'react';

// React Router
import { Switch, Route } from 'react-router-dom';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Containers
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Skills from './Skills/Skills.jsx';
import Passions from './Passions/Passions.jsx';
import Projects from './Projects/Projects.jsx';
import ProjectPage from './Projects/ProjectPage.jsx';
import Footer from './Footer.jsx';
import Error404 from './Error404.jsx';

export default class Routes extends React.Component {
  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <Navbar />
        <div className={css(styles.mainContainer)}>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/skills'} component={Skills} />
            <Route exact path={'/passions'} component={Passions} />
            <Route exact path={'/projects'} component={Projects} />
            <Route path={'/projects/:project_title'} component={ProjectPage} />
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 'calc(100vh - 108px)'
  }
});
