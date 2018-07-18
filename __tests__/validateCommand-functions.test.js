import {
    validatePlaceCommand,
    validatePosition,
    validateMoveCommand,
    validateLeftCommand,
    validateRightCommand,
    validateReportCommand,
} from '../src/business/validateCommand-functions';

/*********************** */
/* validatePlaceCommand  */
/*********************** */
/* VALID CASES */
test('PLACE 0,0,NORTH is a valid Place Command', () => {
    const result = validatePlaceCommand('PLACE 0,0,NORTH');
    expect(result).toEqual(
        {
            X: 0,
            Y: 0,
            F: 'NORTH'
        }
    );
});

test('PLACE 4,5,SOUTH is a valid Place Command', () => {
    const result = validatePlaceCommand('PLACE 4,5,SOUTH');
    expect(result).toEqual(
        {
            X: 4,
            Y: 5,
            F: 'SOUTH'
        }
    );
});

test('PLACE 5,4,WEST is a valid Place Command', () => {
    const result = validatePlaceCommand('PLACE 5,4,WEST');
    expect(result).toEqual(
        {
            X: 5,
            Y: 4,
            F: 'WEST'
        }
    );
});

test('PLACE 5,5,EAST is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 5,5,EAST');
    expect(result).toEqual(
        {
            X: 5,
            Y: 5,
            F: 'EAST'
        }
    );
});

/* INVALID CASES */
test('PLACE  0,0,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE  0,0,NORTH');
    expect(result).toBe(undefined);
});

test('PlACE 0,0,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PlACE 0,0,NORTH');
    expect(result).toBe(undefined);
});

test('PlACE 0,0,NoRTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PlACE 0,0,NoRTH');
    expect(result).toBe(undefined);
});

test('PLACE 0, 0,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 0, 0,NORTH');
    expect(result).toBe(undefined);
});

test('PLACE -1,0,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE -1,0,NORTH');
    expect(result).toBe(undefined);
});

test('PLACE 0,-1,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 0,-1,NORTH');
    expect(result).toBe(undefined);
});

test('PLACE 6,0,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 6,0,NORTH');
    expect(result).toBe(undefined);
});

test('PLACE 0,6,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 0,6,NORTH');
    expect(result).toBe(undefined);
});

test('PLACE 0.1,6,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 0.1,6,NORTH');
    expect(result).toBe(undefined);
});

test('PLACE 1,2.3,NORTH is a invalid Place Command', () => {
    const result = validatePlaceCommand('PLACE 1,2.3,NORTH');
    expect(result).toBe(undefined);
});

/******************* */
/* validatePosition  */
/******************* */
/* VALID CASES */
test('{ X:0, Y:0, F:\'NORTH\'} is a valid position', () => {
    const result = validatePosition({ X:0, Y:0, F:'NORTH'});
    expect(result).toBe(true);
});

test('{ X:4, Y:5, F:\'SOUTH\'} is a valid position', () => {
    const result = validatePosition({ X:4, Y:5, F:'SOUTH'});
    expect(result).toBe(true);
});

test('{ X:5, Y:4, F:\'WEST\'} is a valid position', () => {
    const result = validatePosition({ X:5, Y:4, F:'WEST'});
    expect(result).toBe(true);
});

test('{ X:5, Y:5, F:\'EAST\'} is a valid position', () => {
    const result = validatePosition({ X:5, Y:5, F:'EAST'});
    expect(result).toBe(true);
});

/* INVALID VALID CASES */
test('{ X:-1, Y:0, F:\'NORTH\'} is a valid position', () => {
    const result = validatePosition({ X:-1, Y:0, F:'NORTH'});
    expect(result).toBe(false);
});

test('{ X:0, Y:-1, F:\'SOUTH\'} is a valid position', () => {
    const result = validatePosition({ X:0, Y:-1, F:'SOUTH'});
    expect(result).toBe(false);
});

test('{ X:6, Y:0, F:\'WEST\'} is a valid position', () => {
    const result = validatePosition({ X:6, Y:0, F:'WEST'});
    expect(result).toBe(false);
});

test('{ X:0, Y:6, F:\'EAST\'} is a valid position', () => {
    const result = validatePosition({ X:-1, Y:0, F:'EAST'});
    expect(result).toBe(false);
});

/********************** */
/* validateMoveCommand  */
/********************** */
/* VALID CASES */
test('MOVE is a valid command', () => {
    const result = validateMoveCommand('MOVE');
    expect(result).toBe(true);
});

/* INVALID CASES */
test('mOVE is an invalid command', () => {
    const result = validateMoveCommand('mOVE');
    expect(result).toBe(false);
});

test(' MOVE is an invalid command', () => {
    const result = validateMoveCommand(' MOVE');
    expect(result).toBe(false);
});

test('MOVE  is an invalid command', () => {
    const result = validateMoveCommand('MOVE ');
    expect(result).toBe(false);
});

/********************** */
/* validateLeftCommand  */
/********************** */
/* VALID CASES */
test('LEFT is a valid command', () => {
    const result = validateLeftCommand('LEFT');
    expect(result).toBe(true);
});

/* INVALID CASES */
test('lEFT is an invalid command', () => {
    const result = validateLeftCommand('lEFT');
    expect(result).toBe(false);
});

test(' LEFT is an invalid command', () => {
    const result = validateLeftCommand(' LEFT');
    expect(result).toBe(false);
});

test('LEFT  is an invalid command', () => {
    const result = validateLeftCommand('LEFT ');
    expect(result).toBe(false);
});


/*********************** */
/* validateRightCommand  */
/*********************** */
/* VALID CASES */
test('RIGHT is a valid command', () => {
    const result = validateRightCommand('RIGHT');
    expect(result).toBe(true);
});

/* INVALID CASES */
test('rIGHT is an invalid command', () => {
    const result = validateRightCommand('rIGHT');
    expect(result).toBe(false);
});

test(' RIGHT is an invalid command', () => {
    const result = validateRightCommand(' RIGHT');
    expect(result).toBe(false);
});

test('RIGHT  is an invalid command', () => {
    const result = validateRightCommand('RIGHT ');
    expect(result).toBe(false);
});

/************************ */
/* validateReportCommand  */
/************************ */
/* VALID CASES */
test('REPORT is a valid command', () => {
    const result = validateReportCommand('REPORT');
    expect(result).toBe(true);
});

/* INVALID CASES */
test('rEPORT is an invalid command', () => {
    const result = validateReportCommand('rEPORT');
    expect(result).toBe(false);
});

test(' REPORT is an invalid command', () => {
    const result = validateReportCommand(' REPORT');
    expect(result).toBe(false);
});

test('REPORT  is an invalid command', () => {
    const result = validateReportCommand('REPORT ');
    expect(result).toBe(false);
});