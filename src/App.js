import React, { Component } from 'react';
import { InputField, ReportField, LogField } from './components';
import {
  validatePlaceCommand,
  validatePosition,
  validateMoveCommand,
  validateLeftCommand,
  validateRightCommand,
  validateReportCommand,
} from './business/validateCommand-functions';
import {
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
    if (newPosition.X === -1) {

      // PLACE command is needed
      newPosition = validatePlaceCommand(newCommand);
      if (newPosition === undefined) {
        return;
      }
      
      // PLACE
      this.setState({ currentPosition: newPosition });

    } else {

      if (validateReportCommand(newCommand)) {
        // REPORT
        let reportTxt = 'Output: ' 
          + newPosition.X + ','
          + newPosition.Y + ','
          + newPosition.F;
        this.setState({ report: reportTxt})
        return;
      }

      if (validatePlaceCommand(newCommand) !== undefined) {
        // PLACE
        newPosition = validatePlaceCommand(newCommand);
      }
      else if (validateMoveCommand(newCommand)) {
        // MOVE
        newPosition = getNewPositionByMove(newPosition);
      }
      else if (validateLeftCommand(newCommand)) {
        // LEFT
        newPosition = getNewPositionByLeft(newPosition);
      }
      else if (validateRightCommand(newCommand)) {
        // RIGHT
        newPosition = getNewPositionByRight(newPosition);
      }

      // Update current position
      if (validatePosition(newPosition))
        this.setState({ currentPosition: newPosition });
    }
  }

  _clearCommand() {
    let logTxt = this.state.log + '\n' + this.state.command;
    this.setState({ command: '', report: '' });
    this.setState({ log: logTxt });
  }
  
  ////////////////////
  // VIEW CONTROLLER
  render() {
    return (
      <div className="App">
        <div className='mainArea'>
          <InputField
            id="id_input"
            onChange={this._handleInputChange.bind(this)}
            onKeyPress={this._handleKeyPress.bind(this)}
            value={this.state.command}/>
          <br />
          <br />
          <ReportField
            value={this.state.report}/>
          <br />
          <br />
        </div>
        <div className='logArea'>
          <LogField
            value={this.state.log}/>
        </div>
      </div>
    );
  }
}

export default App;
