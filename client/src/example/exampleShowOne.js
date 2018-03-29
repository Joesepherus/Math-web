import React, { Component } from 'react';
import Steps from '../steps';
import Assignment from './assignment';

class ExampleShowOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsShown: 0,
      maxSteps: 0
    }
    this.nextClick = this.nextClick.bind(this);
  }

  back(e) {
    const { example, selectExample } = this.props;
    e.preventDefault();
    selectExample(example.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.example.assignment !== this.props.example.assignment) {
      this.setState({ maxSteps: nextProps.example.steps.length });
    }
  }

  prevClick(e) {
    if (this.state.stepsShown > 0)
      this.setState({
        stepsShown: this.state.stepsShown - 1
      });
  }

  nextClick(e) {
    if (this.state.stepsShown < this.state.maxSteps)
      this.setState({
        stepsShown: this.state.stepsShown + 1
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.back.bind(this)}>back</button>
        <Assignment
          example={this.props.example}
        />
        <Steps
          example={this.props.example}
          stepsShown={this.props.example.stepsShown}
        />
        <button onClick={this.prevClick.bind(this)}>Previous step</button>
        <button onClick={this.nextClick.bind(this)}>Next step</button>
      </div>
    );
  }
}

export default ExampleShowOne;  
