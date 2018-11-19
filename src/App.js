import React, { Component } from 'react';
import FormPage from "./pages/formPage";
import RedirectPage from "./pages/redirectPage";
import {Route, Switch, Redirect} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={FormPage}></Route>
          <Route path="/thankYou" component={RedirectPage}></Route>
          <Redirect to={"/"}></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
