import React, { Component } from 'react';

class Steps extends Component {

  render() {
    var steps = this.props.example.steps;
    var items = steps.slice(0, this.props.stepsShown);

    return (
      <div className="steps">
        <p>Steps:</p>
        {items.map(item => <p>{item}</p>)}
      </div>
    );
  }
}

export default Steps;  
