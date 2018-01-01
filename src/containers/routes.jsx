// React
import React from "react";

// node modules
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

// containers
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills/Skills";
import Passions from "./Passions/Passions";
import Projects from "./Projects/Projects";
import ProjectPage from "./Projects/ProjectPage";
import Footer from "./Footer/Footer";
import Error404 from "./Error404";

export default class Routes extends React.Component {
  render() {
    return (
      <div id="router-container">
        <Navbar />
        <MainContainer>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/skills"} component={Skills} />
            <Route exact path={"/passions"} component={Passions} />
            <Route exact path={"/projects"} component={Projects} />
            <Route path={"/projects/:project_title"} component={ProjectPage} />
            <Route component={Error404} />
          </Switch>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

const MainContainer = styled.div`
  min-height: calc(100vh - 108px);
`;
