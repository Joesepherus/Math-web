import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Footer from './footer';
import Header from './header';


class RegisterModal extends Component {
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
      assignment: this.state.assignment,
      assignmentText: this.state.assignmentText,
      steps: this.state.steps
    })
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="get">
          Assignment:<br />
          <input type="text"
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

class Assignment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var item = this.props.example.steps;
    return (
      <div className="assignment">
        <h1>Example # {this.props.example.id}</h1>
        <p>{this.props.example.assignment}</p>
        <p>{this.props.example.assignmentText}</p>
      </div>
    );
  }
}

class Steps extends Component {

  constructor(props) {
    super(props)
  }


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

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsShown: 0,
      maxSteps: this.props.example.steps.length
    }
    this.nextClick = this.nextClick.bind(this);
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
      })
  }

  nextClick(e) {
    if (this.state.stepsShown < this.state.maxSteps)
      this.setState({
        stepsShown: this.state.stepsShown + 1
      })
  }

  render() {
    return (
      <div>
        <Assignment
          example={this.props.example}
        />
        <Steps
          example={this.props.example}
          stepsShown={this.state.stepsShown}
        />
        <button onClick={this.prevClick.bind(this)}>Previous step</button>
        <button onClick={this.nextClick.bind(this)}>Next step</button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    examples: [{
      id: "",
      create_date: "",
      description: "",
      steps: [],
      state: ""
    }]
  }

  componentDidMount() {
    fetch('/api/problem')
      .then((response) => response.json())
      .then(examples => this.setState({
        examples: examples
      }))
      .then(console.log(this.state.examples))
  }

  render() {
    const EXAMPLES = [
      {
        id: '1',
        assignment: '5x+2=7',
        assignmentText: 'Solve for x.',
        steps: ['5x=5', 'x=1'],
        rating: '5'
      },
      {
        id: '2',
        assignment: '7x-5=44',
        assignmentText: 'Solve for x.',
        steps: ['7x=49', 'x=7'],
        rating: '4'
      },
      {
        id: '3',
        assignment: '2x+2=7-5x',
        assignmentText: 'Solve for x.',
        steps: ['7x=5', 'x=5/7'],
        rating: '1'
      },
    ];
    return (
      <div className="App" >
        <Header />
        {
          EXAMPLES.map(example =>
            <Example
              example={example}
            />
          )
        }
        {
          this.state.examples.map(example =>
            <Example
              example={example}
            />
          )
        }
        <RegisterModal />
        <Footer />
      </div>
    );
  }
}

export default App;
