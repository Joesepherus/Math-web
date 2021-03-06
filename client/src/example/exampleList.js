import React, { Component } from 'react';
import ExamplePreview from './examplePreview';


class ExampleList extends Component {

  render() {
    
    return (
      this.props.examples.map(example =>
        <div>
          <ExamplePreview
            key={example.id}
            example={example}
            selectExample={this.props.selectExample}
          />
        </div>
      )
    )
  }
}

export default ExampleList;  
