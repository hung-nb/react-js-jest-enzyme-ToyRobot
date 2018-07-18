export function validatePlaceCommand(command) {

    // Check PLACE command
    let arr = command.split(' ');
    if (arr.length !== 2)
        return false;

    if (arr[0] !== "PLACE")
        return false;

    // Check properties
    let arrProps = arr[1].split(",");
    if (arrProps.length !== 3)
        return false;

    if (!isPositiveInteger(arrProps[0]))
        return false;

    if (!isPositiveInteger(arrProps[1]))
        return false;

    if (!validateXY(
        Number.parseInt(arrProps[0], 10)
    ))
        return false;

    if (!validateXY(
        Number.parseInt(arrProps[1], 10)
    ))
        return false;

    if (!validateF(arrProps[2]))
        return false;

    return true;
}

export function validatePosition(XYF_Obj) {
    
    if (!validateXY(XYF_Obj.X))
        return false;

    if (!validateXY(XYF_Obj.Y))
        return false;

    if (!validateF(XYF_Obj.F))
        return false;

    return true;
}

function validateXY(intPosition) {
    if (intPosition >= 0 && intPosition <= 5) {
        return true;
    }

    return false;
}

function isPositiveInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

function validateF(direction) {
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

export function validateMoveCommand(command) {
    if (command !== "MOVE")
        return false;
    return true;
}

export function validateLeftCommand(command) {
    if (command !== "LEFT")
        return false;
    return true;
}

export function validateRightCommand(command) {
    if (command !== "RIGHT")
        return false;
    return true;
}

export function validateReportCommand(command) {
    if (command !== "REPORT")
        return false;
    return true;
}