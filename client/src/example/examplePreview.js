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

  handleClick(e) {
    const { selectExample } = this.props;
    e.preventDefault();
    selectExample(this.props.example.id);
  }

  render() {
    return (
      <div>
        <Assignment
          example={this.props.example}
        />
        <a href="" onClick={this.handleClick.bind(this)}>solve</a>
      </div>
    );
  }
}

export default Example;  
