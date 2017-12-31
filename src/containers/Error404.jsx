// React
import React from "react";

// node modules

// components
import { ColumnContainer } from "./components/Containers";
import { PageHeader } from "./components/Headers";
import { Paragraph } from "./components/Texts";
import { Image } from "./components/Images";

export default class Error404 extends React.Component {
  componentDidMount() {
    let pathname = this.props.location.pathname;
    switch (pathname) {
      case "/spotify-top-10":
        return this.props.history.replace("/projects/spotify");
      case "/yelp-dataset-project":
        return this.props.history.replace("/projects/yelp-dataset");
      default:
        return setTimeout(
          function() {
            this.props.history.replace("/");
          }.bind(this),
          3000
        );
    }
  }

  render() {
    return (
      <ColumnContainer>
        <PageHeader>Error 404 :(</PageHeader>
        <Paragraph>Sorry, this page does not exist.</Paragraph>
        <Image
          src="images/error404.jpg"
          alt="error -- this page does not exist"
          height="691px"
          width="389px"
        />
        <Paragraph>You will be redirected home.</Paragraph>
      </ColumnContainer>
    );
  }
}
