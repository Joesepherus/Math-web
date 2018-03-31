import React, { Component } from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import ExampleAdd from './example/exampleAdd';
import ExampleList from './example/exampleList';
import ExampleFindOne from './example/exampleFindOne';
import { getExamples } from './utils/math-web-api';
import Nav from './Nav';
import { isLoggedIn } from './utils/AuthService';

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
    selectedExampleId: "",
    exampleAdd: false
  }

  getExamples() {
    getExamples().then((examples) => {
      this.setState({ examples });
      this.setState({
        examplesNumber: examples.length +1
      })
    });
  }

  componentDidMount() {
    this.getExamples();
    /*fetch('/api/problem')
      .then((response) => response.json())
      .then(examples => {
        this.setState({
          examplesNumber: examples.length + 1
        })
        this.setState({
          examples: examples
        })
      })*/
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

  exampleAdd = () => {
    this.setState({
      exampleAdd: !this.state.exampleAdd
    })
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {

  return (
      <div className="App" >
        <Header />
        <Nav />
        {this.state.showList && isLoggedIn() && <ExampleList  
        examples={this.state.examples} 
        selectExample={this.selectExample} />}
        {this.state.showOne && <ExampleFindOne
        examples={this.state.examples}
        selectedExampleId={this.state.selectedExampleId}
        selectExample={this.selectExample} />}
        {this.state.showList && 
        <button onClick={this.exampleAdd.bind(this)}>add example</button>}
        {this.state.exampleAdd && <ExampleAdd 
        id={this.state.examplesNumber} 
        exampleAdd={this.exampleAdd}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
