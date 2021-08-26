const { accum } = require('../src/index');

describe('GIVEN the accum function', () => {
  describe('WHEN an input that is not a string is passed', () => {
    test('THEN throw an error', () => {
      expect(() => {
        accum(123);
      }).toThrow();
    });
  });

  describe('WHEN an empty string is passed', () => {
    test('THEN return an empty string', () => {
      expect(accum('')).toEqual('');
    });
  });

  describe('WHEN the input is a string only containing letters', () => {
    test('THEN an input of "a" should return "A"', () => {
      expect(accum('a')).toEqual('A');
    });

    test('THEN an input of "ab" should return "A-Bb"', () => {
      expect(accum('ab')).toEqual('A-Bb');
    });

    test('THEN an input of "ABC" should return "A-Bb-Ccc"', () => {
      expect(accum('ABC')).toEqual('A-Bb-Ccc');
    });

    test('THEN an input of "RqaEzty" should return "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"', () => {
      expect(accum('RqaEzty')).toEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    });
  });
});
