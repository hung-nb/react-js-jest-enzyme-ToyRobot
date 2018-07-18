import {
    getNewPositionByMove,
    getNewPositionByLeft,
    getNewPositionByRight,
} from '../src/business/getPosition-functions';

/*********************** */
/* getNewPositionByMove  */
/*********************** */
test('0,0,NORTH -> 0,1,NORTH', () => {
    const result = getNewPositionByMove({
        X: 0,
        Y: 0,
        F: 'NORTH'
    });
    expect(result).toEqual({
        X: 0,
        Y: 1,
        F: 'NORTH'
    });
});

test('4,5,SOUTH -> 4,4,SOUTH', () => {
    const result = getNewPositionByMove({
        X: 4,
        Y: 5,
        F: 'SOUTH'
    });
    expect(result).toEqual({
        X: 4,
        Y: 4,
        F: 'SOUTH'
    });
});

test('5,4,WEST -> 4,4,WEST', () => {
    const result = getNewPositionByMove({
        X: 5,
        Y: 4,
        F: 'WEST'
    });
    expect(result).toEqual({
        X: 4,
        Y: 4,
        F: 'WEST'
    });
});

test('4,5,EAST -> 5,5,EAST', () => {
    const result = getNewPositionByMove({
        X: 4,
        Y: 5,
        F: 'EAST'
    });
    expect(result).toEqual({
        X: 5,
        Y: 5,
        F: 'EAST'
    });
});

test('5,5,NORTH -> 5,6,NORTH', () => {
    const result = getNewPositionByMove({
        X: 5,
        Y: 5,
        F: 'NORTH'
    });
    expect(result).toEqual({
        X: 5,
        Y: 6,
        F: 'NORTH'
    });
});

test('0,0,SOUTH -> 0,-1,SOUTH', () => {
    const result = getNewPositionByMove({
        X: 0,
        Y: 0,
        F: 'SOUTH'
    });
    expect(result).toEqual({
        X: 0,
        Y: -1,
        F: 'SOUTH'
    });
});

test('0,4,WEST -> -1,4,WEST', () => {
    const result = getNewPositionByMove({
        X: 0,
        Y: 4,
        F: 'WEST'
    });
    expect(result).toEqual({
        X: -1,
        Y: 4,
        F: 'WEST'
    });
});

test('5,5,EAST -> 6,5,EAST', () => {
    const result = getNewPositionByMove({
        X: 5,
        Y: 5,
        F: 'EAST'
    });
    expect(result).toEqual({
        X: 6,
        Y: 5,
        F: 'EAST'
    });
});

/*********************** */
/* getNewPositionByLeft  */
/*********************** */
test('0,0,NORTH -> 0,0,WEST', () => {
    const result = getNewPositionByLeft({
        X: 0,
        Y: 0,
        F: 'NORTH'
    });
    expect(result).toEqual({
        X: 0,
        Y: 0,
        F: 'WEST'
    });
});

test('4,5,WEST -> 4,5,SOUTH', () => {
    const result = getNewPositionByLeft({
        X: 4,
        Y: 5,
        F: 'WEST'
    });
    expect(result).toEqual({
        X: 4,
        Y: 5,
        F: 'SOUTH'
    });
});

test('5,4,SOUTH -> 5,4,EAST', () => {
    const result = getNewPositionByLeft({
        X: 5,
        Y: 4,
        F: 'SOUTH'
    });
    expect(result).toEqual({
        X: 5,
        Y: 4,
        F: 'EAST'
    });
});

test('5,5,EAST -> 5,5,NORTH', () => {
    const result = getNewPositionByLeft({
        X: 5,
        Y: 5,
        F: 'EAST'
    });
    expect(result).toEqual({
        X: 5,
        Y: 5,
        F: 'NORTH'
    });
});

/************************ */
/* getNewPositionByRight  */
/************************ */
test('0,0,NORTH -> 0,0,EAST', () => {
    const result = getNewPositionByRight({
        X: 0,
        Y: 0,
        F: 'NORTH'
    });
    expect(result).toEqual({
        X: 0,
        Y: 0,
        F: 'EAST'
    });
});

test('4,5,EAST -> 4,5,SOUTH', () => {
    const result = getNewPositionByRight({
        X: 4,
        Y: 5,
        F: 'EAST'
    });
    expect(result).toEqual({
        X: 4,
        Y: 5,
        F: 'SOUTH'
    });
});

test('5,4,SOUTH -> 5,4,WEST', () => {
    const result = getNewPositionByRight({
        X: 5,
        Y: 4,
        F: 'SOUTH'
    });
    expect(result).toEqual({
        X: 5,
        Y: 4,
        F: 'WEST'
    });
});

test('5,5,WEST -> 5,5,NORTH', () => {
    const result = getNewPositionByRight({
        X: 5,
        Y: 5,
        F: 'WEST'
    });
    expect(result).toEqual({
        X: 5,
        Y: 5,
        F: 'NORTH'
    });
});