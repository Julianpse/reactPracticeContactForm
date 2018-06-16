import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName : '',
      email: '',
      address: '',
      city: '',
      usState: '',
      zipCode: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

    render() {
      return (
        <form onSubmit ={this.handleSubmit}>
            <input
              name = "firstName"
              placeholder = 'First Name'
              type="text"
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <input
              name = "lastName"
              placeholder = 'Last Name'
              type="text"
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <input
              name = "email"
              placeholder = 'Email'
              type="text"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <input
              name = "address"
              placeholder = 'Address'
              type="text"
              value={this.state.address}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <input
              name = "city"
              placeholder = 'City'
              type="text"
              value={this.state.city}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <input
              name = "usState"
              placeholder = 'State'
              type="text"
              value={this.state.usState}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <input
              name = "zipCode"
              placeholder = 'Zip Code'
              type="text"
              value={this.state.zipCode}
              onChange={e => this.handleChange(e)}
              />
            <br/>
            <Button onClick={(e)=> this.handleSubmit(e)}>Submit</Button>
        </form>
      );
    }
}

export default Form;
