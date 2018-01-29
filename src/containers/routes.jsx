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
import SkillPage from "./Skills/SkillPage";
import Passions from "./Passions/Passions";
import Projects from "./Projects/Projects";
import ProjectPage from "./Projects/ProjectPage";
import Footer from "./Footer/Footer";
import Error404 from "./Error404";

export default class Routes extends React.Component {
  render() {
    return (
      <MainContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/skills/:skill" component={SkillPage} />
          <Route exact path="/passions" component={Passions} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:project_title" component={ProjectPage} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  border-top: 5px solid var(--blue);
  display: grid;
  grid-template-rows: 60px 1fr 50px;
`;
