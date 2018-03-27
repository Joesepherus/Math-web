import React, { Component } from 'react';
import ExamplePreview from './examplePreview';


class ExampleList extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      this.props.examples.map(example =>
        <ExamplePreview
          example={example}
        />
      )
    )
  }
}

export default ExampleList;  
