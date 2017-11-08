import React, { Component } from 'react';
import Data from './Data';
import ReactHowler from 'react-howler';
import { Row, Grid, Col } from 'react-bootstrap';
import '../App.css';
import App from '../App.js';

class Piano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charr: Data.charr,
      soundPath: Data.soundPath,
      ebony: Data.ebony,
      board: Data.board,
      keyboard: Data.keyboard,
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
    let keyStr = event.key.toString();
    console.log(keyStr);
    let key = this.state.data.Data.keyboard[keyStr];
    console.log(key);
    this.change(event);
    key.play();

  }
  render() {
    return (
      <Grid>
      <div className="container-fluid">
      <Row>
        <ul>
          <li>
            <div className="whiteKey" id="49" onKeyPress={this.playnChange}>
            </div>
            <div className="blackKey" id="50" onKeyDown={this.change}>
            </div>
          </li>
          <li>
            <div className="whiteKey" id="51">
            </div>
            <div className="blackKey" id="52">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="53">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="54">
            </div>
            <div className="blackKey" id="55">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="56">
            </div>
            <div className="blackKey" id="57">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="48">
            </div>
            <div className="blackKey" id="189">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="187">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="81">
            </div>
            <div className="blackKey" id="87">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="69">
            </div>
            <div className="blackKey" id="82">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="84">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="89">
            </div>
            <div className="blackKey" id="85">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="73">
            </div>
            <div className="blackKey" id="79">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="80">
            </div>
            <div className="blackKey" id="219">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="221">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="65">
            </div>
            <div className="blackKey" id="83">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="68">
            </div>
            <div className="blackKey" id="70">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="71">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="72">
            </div>
            <div className="blackKey" id="74">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="75">
            </div>
            <div className="blackKey" id="76">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="186">
            </div>
            <div className="blackKey" id="222">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="13">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="90">
            </div>
            <div className="blackKey" id="88">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="67">
            </div>
            <div className="blackKey" id="86">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="66">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="78">
            </div>
            <div className="blackKey" id="77">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="188">
            </div>
            <div className="blackKey" id="190">
            </div>
          </li>
          <li>
            <div className="whiteKey" id="191">
            </div>
            <div className="blackKey" id="16">
            </div>
          </li>
          <li className="single">
            <div className="whiteKey single" id="32">
            </div>
          </li>
        </ul>
        </Row>
      </div>
      </Grid>
    );
  }
}

export default Piano;
