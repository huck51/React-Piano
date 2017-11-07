import React, { Component } from 'react';
import 'react-dom';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import Piano from './Components/Piano';
import Data from './Components/Data';
import ReactHowler from 'react-howler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <h1>Welcome to React Piano</h1>
            <p>Use your keyboard to play React Piano!</p>
        </Jumbotron>
        <Piano data={this.state.data}/>
      </div>
    );
  }
}

export default App;
