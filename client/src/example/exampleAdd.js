import React, { Component } from 'react';
import axios from 'axios';
import MathQuill from 'mathquill';

class ExampleAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignment: '',
      assignmentText: ''
    }
    this.change = this.change.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change(event) {
    this.setState({ assignment: event.target.value });
  }

  changeText(event) {
    this.setState({ assignmentText: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/problem", {
      id: this.props.id,
      assignment: this.state.assignment,
      assignmentText: this.state.assignmentText,
      steps: this.state.steps,
    })
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  back(e) {
    e.preventDefault();
    this.props.exampleAdd();
  }

  componentDidMount() {
    var MQ = MathQuill.getInterface(2);
    var answerSpan = document.getElementsByClassName('answer');
    console.log(answerSpan[0]);
    var answerMathField = MQ.MathField(answerSpan[0], {
      handlers: {
        edit: function () {
          var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
          // checkAnswer(enteredMath);
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.back.bind(this)}>back</button>
        <form onSubmit={this.handleSubmit} method="get">
          Assignment:<br />
          <span type="text"
            className="answer"
            name="assignment"
            onChange={this.change.bind(this)}
            value={this.state.assignment} /><br />
          Assignment Text:<br />
          <input type="text"
            name="assignmentText"
            onChange={this.changeText.bind(this)}
            value={this.state.assignmentText} /><br />
          Steps:<br />
          <input type="password" name="steps" /><br />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ExampleAdd;  
