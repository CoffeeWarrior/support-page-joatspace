import React, { Component } from 'react';
import Header from "./stateless/header";
import Paragraph from "./stateless/paragraph";
import Input from "./stateful/Input"

class App extends Component {
  render() {
    //set background
    const appStyles = {    
      backgroundImage: "-webkit-linear-gradient(331deg,#43e695,#3bb2b8)",
      width: "100vw",
      height: "100vh"
    }
    
    return (
      <div className="App" style={appStyles}>
        <Header>experiencing issues?</Header>
        <Paragraph>We're sorry to hear that, <br/>please let us know about it below &darr;</Paragraph>
        {/*should accept 2 inputs, subject, and body*/}
        <form>
        {/*accepts 2 inputs, height and width, which will both be converted to percent*/}
        <Input height="1" width="60">subject</Input>
        <Input height="7" width="60">body</Input>
        </form>  
        
      
      </div>
    );
  }
}

export default App;
