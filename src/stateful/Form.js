import React, { Component } from 'react';
import FormElement from "../stateless/formElement"
import Button from "../stateless/button"

class Form extends Component {
  state = {
    subject: "",
    body: "",
  }

  //function will update state based off changes to form element
  //accepts subject as a bool value to update either the subject or the body property
  handleFormElementChange = (event) => {
    const currentState = {...this.state}
    
    if(event.currentTarget.name == "subject"){
      currentState.subject = event.target.value;
    
    } else {
      currentState.body = event.target.value;
    
    }
    this.setState({...currentState})
  }

  render() {
    //set background
    
    //form needs 2 inputs, the subject and body. The FormElements accept 2 elements, the rows, and the width in percent
    return (
        <form action={`mailto:lionlikelucas@gmail.com?subject=${this.state.subject}`}>
        <FormElement rows="1" width="50" value={this.state.subject} name="subject" onChange={(e) => this.handleFormElementChange(e)}>subject</FormElement>
        <FormElement rows="7" width="50" value={this.state.body} name="body" onChange={(e) => this.handleFormElementChange(e)}>body</FormElement>
        
        <Button width="10" height="3.5">Submit Issue</Button>
        </form> 
    );
  }
}

export default Form;
