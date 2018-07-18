import React, { Component } from 'react';
import './App.css';

import { InputScreen, ReportScreen, LogScreen } from './components';

import {
  validatePlaceCommand,
  validatePlaceProps,
  validateMoveCommand,
  validateLeftCommand,
  validateRightCommand,
  validateReportCommand,
} from './business/validation-functions';

import {
  getNewPositionByPlace,
  getNewPositionByMove,
  getNewPositionByLeft,
  getNewPositionByRight,
} from './business/util-functions';

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


    // LOGIC
    let newPosition = this.state.currentPosition;
    if (this.state.currentPosition.X === -1) {
      
      // PLACE command is needed
      if (!validatePlaceCommand(this.state.command)) {
        return;
      }
      
      // PLACE
      newPosition = getNewPositionByPlace(this.state.command);
      this.setState({ currentPosition: newPosition });

    } else {

      if (validateReportCommand(this.state.command)) {
        return;
      }

      if (validatePlaceCommand(this.state.command)) {
        // PLACE
        newPosition = getNewPositionByPlace(this.state.command);
      }
      else if (validateMoveCommand(this.state.command)) {
        // MOVE
        newPosition = getNewPositionByMove(this.state.currentPosition);
      }
      else if (validateLeftCommand(this.state.command)) {
        // LEFT
        newPosition = getNewPositionByLeft(this.state.currentPosition);
      }
      else if (validateRightCommand(this.state.command)) {
        // RIGHT
        newPosition = getNewPositionByRight(this.state.currentPosition);
      }

      // Update current position
      if (validatePlaceProps(newPosition))
        this.setState({ currentPosition: newPosition });
    }
  }
  
  ////////////////////
  // VIEW CONTROLLER
  render() {
    return (
      <div className="App">
        <InputScreen
          onChange={this._handleInputChange.bind(this)}
          onKeyPress={this._handleKeyPress.bind(this)}/>
        <br />
        <br />
        <ReportScreen />
        <br />
        <br />
        <LogScreen value={this.state.command}/>
      </div>
    );
  }
}

export default App;
