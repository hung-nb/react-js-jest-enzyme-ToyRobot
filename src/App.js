import React, { Component } from 'react';
import './App.css';

import { InputField, ReportField, LogField } from './components';

import {
  validatePlaceCommand,
  validatePlaceProps,
  validateMoveCommand,
  validateLeftCommand,
  validateRightCommand,
  validateReportCommand,
} from './business/validateCommand-functions';

import {
  getNewPositionByPlace,
  getNewPositionByMove,
  getNewPositionByLeft,
  getNewPositionByRight,
} from './business/getPosition-functions';

class App extends Component {

  //////////////////////
  // STATE CONTROLLER
  constructor(props) {        
		super(props);		
    this.state = {
      currentPosition: {
				X: -1,
				Y: -1,
				F: ""
		  },
      command: '',
      report: '',
      log: '',
    }
  }

  ///////////////////////////
  // USER ACTION CONTROLLER
  _handleInputChange(event) {
    this.setState({command: event.target.value})
  }
	
	_handleKeyPress(event) {

		if (event.key !== 'Enter') {
      return;
    }

    // LAYOUT
    let newCommand = this.state.command;
    this._clearCommand();

    // LOGIC
    let newPosition = this.state.currentPosition;
    if (this.state.currentPosition.X === -1) {

      // PLACE command is needed
      if (!validatePlaceCommand(newCommand)) {
        return;
      }
      
      // PLACE
      newPosition = getNewPositionByPlace(newCommand);
      this.setState({ currentPosition: newPosition });

    } else {

      if (validateReportCommand(newCommand)) {
        // REPORT
        let reportTxt = 'Output: ' 
          + this.state.currentPosition.X + ','
          + this.state.currentPosition.Y + ','
          + this.state.currentPosition.F;
        this.setState({ report: reportTxt})
        return;
      }

      if (validatePlaceCommand(newCommand)) {
        // PLACE
        console.log('PLACE');
        newPosition = getNewPositionByPlace(newCommand);
        console.log(newPosition);
      }
      else if (validateMoveCommand(newCommand)) {
        // MOVE
        newPosition = getNewPositionByMove(this.state.currentPosition);
      }
      else if (validateLeftCommand(newCommand)) {
        // LEFT
        newPosition = getNewPositionByLeft(this.state.currentPosition);
      }
      else if (validateRightCommand(newCommand)) {
        // RIGHT
        newPosition = getNewPositionByRight(this.state.currentPosition);
      }

      // Update current position
      if (validatePlaceProps(newPosition))
        this.setState({ currentPosition: newPosition });
    }
  }

  _clearCommand = () => {
    let logTxt = this.state.log + '\n' + this.state.command;
    this.setState({ command: '' });
    this.setState({ log: logTxt });
  }
  
  ////////////////////
  // VIEW CONTROLLER
  render() {
    return (
      <div className="App">
        <InputField
          onChange={this._handleInputChange.bind(this)}
          onKeyPress={this._handleKeyPress.bind(this)}
          value={this.state.command}/>
        <br />
        <br />
        <ReportField
          value={this.state.report}/>
        <br />
        <br />
        <LogField
          value={this.state.log}/>
      </div>
    );
  }
}

export default App;
