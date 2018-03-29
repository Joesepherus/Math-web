import React, { Component } from 'react';
import ExamplePreview from './examplePreview';


class ExampleList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      this.props.examples.map(example =>
        <div>
          <ExamplePreview
            example={example}
            selectExample={this.props.selectExample}
          />
        </div>
      )
    )
  }
}

export default ExampleList;  
