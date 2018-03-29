import React, { Component } from 'react';
import ExampleShowOne from './exampleShowOne';


class ExampleFindOne extends Component {

  renderSelectedExample() {
    const { selectedExampleId, examples } = this.props;
    const example = examples.filter(example => {
      if (example.id === selectedExampleId) {
        console.log(example);
        return example;
      }
      return '';
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
