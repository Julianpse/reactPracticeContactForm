import React, { Component } from 'react';
import Form from './form';
import './App.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {

  state = {
    fields: {}
  };

  onSubmit = (fields) =>  {
    console.log('Here are the submitted fields', fields);
    this.setState({fields});
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact Form</h1>
        </header>
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <br/>
          <h1>Contacts</h1>
          <h3>First Name: {this.state.fields.firstName}</h3>
          <h3>Last Name: {this.state.fields.lastName}</h3>
          <h3>Email: {this.state.fields.email}</h3>
          <h3>City: {this.state.fields.city}</h3>
          <h3>State: {this.state.fields.usState}</h3>
          <h3>Zip Code: {this.state.fields.zipCode}</h3>
      </div>
    );
  }
}


export default App;
