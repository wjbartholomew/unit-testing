const years = require('../modules/years.js');

test('years of 800', () => {
    expect(years(800)).toBe(true);
});

test('years of 500', () => {
    expect(years(500)).toBe(false);
});

test('years of 100', () => {
    expect(years(100)).toBe(false);
});

test('years of 44', () => {
    expect(years(44)).toBe(true);
});