import React, { Component } from 'react';
import FormElement from "../presentational/formElement"
import Button from "../presentational/button"
import axios from "../helpers/axios"
import Aux from "../helpers/auxiliary";
import { Redirect } from "react-router-dom";


class Form extends Component {
  state = {
    subject: "",
    body: "",
    submittable: false,
    submitted: false
  }

  //function will update state based off changes to form element
  //accepts subject as a bool value to update either the subject or the body property
  handleFormElementChange = (event) => {
    event.preventDefault()
    const currentState = {...this.state}
    //updates subject or body state changes
    currentState[event.currentTarget.name] = event.target.value;

    //updates whether form should be deemed submittable (should have inputs for both subject and body)
    // let hasBody = 
    // let hasSubject = 
    
    currentState.submittable = currentState.body.length > 0 && currentState.subject.length > 0;
    
    this.setState({...currentState})
  }

  //sends form to firebase under "supportForms" data
  submitForm = (e) => {
    e.preventDefault()
    const formData = {
      subject: this.state.subject,
      body: this.state.body
    } 
    
    
    axios.post('/supportForms.json', formData)
      .then(() => {
        this.setState({submitted: true})
      })
      
  }

  render() {
    //form needs 2 inputs, the subject and body. The FormElements accept 2 elements, the rows, and the width in percent
    return (
        <Aux>
          <form onSubmit={this.submitForm}>
          <FormElement rows="1" width="50" value={this.state.subject} name="subject" onChange={(e) => this.handleFormElementChange(e)}>subject</FormElement>
          <FormElement rows="7" width="50" value={this.state.body} name="body" onChange={(e) => this.handleFormElementChange(e)}>body</FormElement>
          
          <Button width="10" height="3.5" submittable={this.state.submittable}>Submit Issue</Button>
          </form> 
          {this.state.submitted && (
            <Redirect to={'/thankYou'}/>
          )}
        </Aux>
        
    );
  }
}

export default Form;
