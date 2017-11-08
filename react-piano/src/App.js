import React, { Component } from 'react';
import 'react-dom';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import Piano from './Components/Piano';
import Data from './Components/Data';
import ReactHowler from 'react-howler';
import { Howl } from 'howler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    }
    this.change.bind(this);
    this.playnChange.bind(this);
  }
  componentDidMount() {
    console.log('Shamalamadingdong');
    window.addEventListener('onKeyDown', this.playnChange, false);
    window.addEventListener('onKeyUp', this.change, false);
  }
  change(event) {
    let kc = event.keyCode;
    // let bcolor = document.getElementById(kc).style;
    let bcolor = {
      backgroundColor: 'rgba(10, 10, 10, 0)'
    };
    if (this.state.data.Data.ivory.includes(kc)) {
      if (!bcolor.backgroundColor || bcolor.backgroundColor === 'rgba(10, 10, 10, 0)') {
        bcolor.backgroundColor = 'rgba(150, 25, 65, .5)';
      } else {
        bcolor.backgroundColor = 'rgba(10, 10, 10, 0)';
      }
    }
    if (this.state.data.Data.ebony.includes(kc)) {
      if (!bcolor.backgroundColor || bcolor.backgroundColor === 'black') {
        bcolor.backgroundColor = 'rgba(150, 25, 65, .5)';
      } else {
        bcolor.backgroundColor = 'black';
      }
    }
  }
  playnChange(event) {
    let keyStr = event.keyCode.toString();
    console.log(keyStr);
    let key = this.state.data.Data.keyboard[keyStr];
    console.log(key);
    this.change(event);
    key.play();

  }

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <h1>Welcome to React Piano</h1>
            <p>Use your keyboard to play React Piano!</p>
        </Jumbotron>
        <Piano data={this.state.data} onKeyPress={this.playnChange, this.change}/>
      </div>
    );
  }
}

export default App;
