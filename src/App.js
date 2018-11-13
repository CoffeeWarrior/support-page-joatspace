import React, { Component } from 'react';
import Header from "./stateless/header";
import Paragraph from "./stateless/paragraph";
import Form from "./stateful/Form";
class App extends Component {
  render() {
    //set background
    
    return (
      <div className="App">
        <Header>experiencing issues?</Header>
        <Paragraph>We're sorry to hear that, <br/>please let us know about it below &darr;</Paragraph>
        <Form></Form>
      </div>
    );
  }
}

export default App;
