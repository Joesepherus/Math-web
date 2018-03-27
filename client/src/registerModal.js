import React, { Component } from 'react';
import axios from 'axios';

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignment: '',
      assignmentText: ''
    }
    this.change = this.change.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change(event) {
    this.setState({ assignment: event.target.value });
  }

  changeText(event) {
    this.setState({ assignmentText: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/problem", {
      assignment: this.state.assignment,
      assignmentText: this.state.assignmentText,
      steps: this.state.steps
    })
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="get">
          Assignment:<br />
          <input type="text"
            name="assignment"
            onChange={this.change.bind(this)}
            value={this.state.assignment} /><br />
          Assignment Text:<br />
          <input type="text"
            name="assignmentText"
            onChange={this.changeText.bind(this)}
            value={this.state.assignmentText} /><br />
          Steps:<br />
          <input type="password" name="steps" /><br />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterModal;  
