import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import Example from './example';
import Steps from './steps';
import Assignment from './assignment';
import RegisterModal from './registerModal';

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
