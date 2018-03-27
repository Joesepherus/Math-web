import React, { Component } from 'react';

class Assignment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var item = this.props.example.steps;
    return (
      <div className="assignment">
        <h1>Example # {this.props.example.id}</h1>
        <p>{this.props.example.assignment}</p>
        <p>{this.props.example.assignmentText}</p>
      </div>
    );
  }
}

export default Assignment;  
