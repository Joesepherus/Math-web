import React, { Component } from 'react';

class Assignment extends Component {

  render() {
    return (
      <div className="assignment">
        <h1>Example # {this.props.example.id}</h1>
        <p className="problem">{this.props.example.assignment}</p>
        <p>{this.props.example.assignmentText}</p>
      </div>
    );
  }
}

export default Assignment;  
