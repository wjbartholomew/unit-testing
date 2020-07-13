const sum = require('../modules/sum.js');

test('sum of 1 and 2 expect 3', () => {
    expect(sum(1,2)).toBe(3); 
});


test('sum of -1.5 and 3 gives 1.5', () => {
    expect(sum(-1.5, 3)).toBe(1.5);
})


test('sum of 3, and "3" expect 6', () => {
    expect(sum(3,'3')).toBe(6);
})

test('sum of 3, and "threesy" expect NaN', () => {
    expect(sum(3, 'threesy')).toBe(NaN);
})


