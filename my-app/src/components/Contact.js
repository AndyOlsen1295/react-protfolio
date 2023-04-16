import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Andrew Olsen',
      email: 'AndyOlsen1295@gmail.com',
      Github: 'AndyOlsen1295'
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;

    // Here you can use the data to send a message or do something else
    console.log(name, email, message);

    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={this.state.message} onChange={this.handleInputChange} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;

