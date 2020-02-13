const cloneArray = require('./cloneArray');

test('Properly clones the array', () => {

    const array = [1,2,3];

    expect( cloneArray(array)).toBe(array);


})