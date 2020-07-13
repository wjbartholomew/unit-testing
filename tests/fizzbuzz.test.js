const fizzbuzz = require('../modules/fizzbuzz.js');


test('fizzbuzz of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
})

test('fizzbuzz of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
})

test('fizzbuzz of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
})


test('fizzbuzz of 30', () => {
    expect(fizzbuzz(30)).toBe('fizzbuzz');
})

test('fizzbuzz of 7', () => {
    expect(fizzbuzz(7)).toBe(7);
})