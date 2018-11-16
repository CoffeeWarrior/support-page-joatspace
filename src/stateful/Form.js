import React, { Component } from 'react';
import FormElement from "../stateless/formElement"
import Button from "../stateless/button"
import axios from "../helpers/axios"

class Form extends Component {
  state = {
    subject: "",
    body: "",
  }

  //function will update state based off changes to form element
  //accepts subject as a bool value to update either the subject or the body property
  handleFormElementChange = (event) => {
    event.preventDefault()
    const currentState = {...this.state}
    
    if(event.currentTarget.name == "subject"){
      currentState.subject = event.target.value;
    
    } else {
      currentState.body = event.target.value;
    
    }
    this.setState({...currentState})
  }

  submitForm = (e) => {
    e.preventDefault()
    const form = {
      subject: this.state.subject,
      body: this.state.body
    } 
    
    
    axios.post('/supportForms.json', form)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    //set background
    
    //form needs 2 inputs, the subject and body. The FormElements accept 2 elements, the rows, and the width in percent
    return (
        <form onSubmit={this.submitForm}>
        <FormElement rows="1" width="50" value={this.state.subject} name="subject" onChange={(e) => this.handleFormElementChange(e)}>subject</FormElement>
        <FormElement rows="7" width="50" value={this.state.body} name="body" onChange={(e) => this.handleFormElementChange(e)}>body</FormElement>
        
        <Button width="10" height="3.5">Submit Issue</Button>
        </form> 
    );
  }
}

export default Form;
