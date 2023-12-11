const { idIsANumber } = require('../src/idIsANumber');

test('Test id is a number', () => {
    expect(idIsANumber('a')).toEqual(false);
});

test('Test is a negative number must be false', () => {
    expect(idIsANumber(-1)).toEqual(false);
});

test('Test id is a number is true', () => {
    expect(idIsANumber(2)).toEqual(true);
});
