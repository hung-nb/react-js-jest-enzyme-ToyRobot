import {
    getArrayXYF,
    isPositiveInteger,
  } from './util-functions';

export function validatePlaceCommand(command) {

    // Check PLACE command
    if (command.substring(0, 6) !== "PLACE ")
        return false;

    // Check properties
    let arrProps = getArrayXYF(command);
    if (arrProps.length !== 3)
        return false;

    if (!validateXY(arrProps[0]))
        return false;

    if (!validateXY(arrProps[1]))
        return false;

    if (!validateF(arrProps[2]))
        return false;

    return true;
}

export function validateXY(position) {

    // Check if number
    if (!isPositiveInteger(position)) {
        return false;
    }

    // Check if number is from 0 to 5
    let intPosition = Number.parseInt(position, 10) + 1;
    if (intPosition < 0 || intPosition > 5) {
        return false;
    }

    return true;
}

export function validateF(direction) {
    if (
        direction !== "NORTH"    
        && direction !== "SOUTH"    
        && direction !== "WEST"    
        && direction !== "EAST"

    ) {    
        return false;    
    }

    return true;
}

export function validatePlaceProps(XYF_Obj) {
    
    if (!validateXY(XYF_Obj.X))
        return false;

    if (!validateXY(XYF_Obj.Y))
        return false;

    if (!validateF(XYF_Obj.F))
        return false;

    return true;
}

export function validateMoveCommand(command) {
    if (command.substring(0, command.length) !== "MOVE")
        return false;
    return true;
}

export function validateLeftCommand(command) {
    if (command.substring(0, command.length) !== "LEFT")
        return false;
    return true;
}

export function validateRightCommand(command) {
    if (command.substring(0, command.length) !== "RIGHT")
        return false;
    return true;
}

export function validateReportCommand(command) {
    if (command.substring(0, command.length) !== "REPORT")
        return false;
    return true;
}