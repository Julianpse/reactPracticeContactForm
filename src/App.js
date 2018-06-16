import React, { Component } from 'react';
import Form from './form';
import './App.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {

  onSubmit = (fields) =>  {
    console.log('Here are the submitted fields', fields);
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact Form</h1>
        </header>
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}


export default App;
