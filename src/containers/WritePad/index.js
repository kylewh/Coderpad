import React, { Component } from "react";
import Editor from "../Editor/";
import Container from "./styled/Container";

class WritePad extends Component {
  render() {
    return (
      <Container>
        <Editor />
      </Container>
    );
  }
}

export default WritePad;
