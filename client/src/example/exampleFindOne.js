import React, { Component } from 'react';
import Steps from '../steps';
import Assignment from './assignment';
import ExampleShowOne from './exampleShowOne';


class ExampleFindOne extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectedExample() {
    const { selectedExampleId, examples } = this.props;
    const example = examples.filter(example => {

      if (example.id === selectedExampleId) {
        console.log(example);
        return example;
      }
    });
    console.log(example[0]);

    return (

      <ExampleShowOne
        example={example[0]} 
        selectExample={this.props.selectExample} />
    );
  }

  render() {
    return (
      <div>
        {this.renderSelectedExample()}
      </div>
    );
  }
}

export default ExampleFindOne;  
