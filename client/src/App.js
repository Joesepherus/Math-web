import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import Assignment from './example/assignment';
import RegisterModal from './registerModal';
import ExampleList from './example/exampleList';
import ExampleFindOne from './example/exampleFindOne';

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
    showList: true,
    showOne: false,
    selectedExampleId: ""
  }

  componentDidMount() {
    fetch('/api/problem')
      .then((response) => response.json())
      .then(examples => {
        this.setState({
          examplesNumber: examples.length + 1
        })
        this.setState({
          examples: examples
        })
      })
  }

  selectExample = (exampleId) => {
    this.setState({
      selectedExampleId: exampleId
    });
    this.setState({
      showList: !this.state.showList
    })
    this.setState({
      showOne: !this.state.showOne
    })
    console.log(this.state.selectedExampleId);
  }

  render() {

    return (
      <div className="App" >
        <Header />
        {this.state.showList && <ExampleList 
        examples={this.state.examples} 
        selectExample={this.selectExample} />}
        {this.state.showOne && <ExampleFindOne
        examples={this.state.examples}
        selectedExampleId={this.state.selectedExampleId}
        selectExample={this.selectExample} />}
        <RegisterModal id={this.state.examplesNumber} />
        <Footer />
      </div>
    );
  }
}

export default App;
