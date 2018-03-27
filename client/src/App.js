import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import Assignment from './example/assignment';
import RegisterModal from './registerModal';
import ExampleList from './example/exampleList';

class App extends Component {

  state = {
    examples: [{
      id: "",
      create_date: "",
      description: "",
      steps: [],
      state: ""
    }],
    examplesNumber: "",
  }

  componentDidMount() {
    fetch('/api/problem')
      .then((response) => response.json())
      .then(examples => {
        this.setState({
          examplesNumber: examples.length + 1
        })
        console.log(this.state.examplesNumber);
        this.setState({
        examples: examples
      })})
  }

  render() {

    return (
      <div className="App" >
        <Header />
        <ExampleList examples={this.state.examples} />
        <RegisterModal id={this.state.examplesNumber} />
        <Footer />
      </div>
    );
  }
}

export default App;
