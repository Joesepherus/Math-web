import React, { Component } from 'react';
import Steps from '../steps';
import Assignment from './assignment';

class Example extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.example.assignment !== this.props.example.assignment) {
      this.setState({ maxSteps: nextProps.example.steps.length });
    }
  }

  render() {
    return (
      <div>
        <Assignment
          example={this.props.example}
        />
      </div>
    );
  }
}

export default Example;  
