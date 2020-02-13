const cloneArray = require('./cloneArray');

test('Properly clones the array', () => {

    const array = [1,2,3];

    expect( cloneArray(array)).toEqual(array);

    //To make sure the araay is in fact a copy and not the original array
    expect( cloneArray(array)).not.toBe(array);

})