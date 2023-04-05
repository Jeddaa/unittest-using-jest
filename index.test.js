const { stringLength, reverseString, capitalize } = require('./index');
const calc = require('./calculator');
const calculator = new calc();

describe('string length function', () => {
  test('get the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
    const trial = () => stringLength('');
    expect(trial).toThrowError('string must be greater than 1 character');
    expect(() => stringLength('hello beautiful!').toThrowError('string must be less than 10 characters'));
    const trial2 = () => stringLength('Hello, world');
    expect(trial2).toThrowError('string must be less than 10 characters');
  });
});

describe('reverse string function tests', function () {
  test('should reverse string', function () {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('result should be a string', function () {
    expect(typeof reverseString('hello')).toBe('string');
  });
  test('result should be a string', function () {
    expect(typeof reverseString('')).toBeDefined();
  });
});

describe('Calculator tests', function () {
  it('should return the sum of 2 and 3', function () {
    expect(calculator.add(2, 3)).toEqual(5);
  });
  it('should return the sum of -15 and 15', function () {
    expect(calculator.add(-15, 15)).toBeFalsy();
  });
  it('should return the sum of 12 and -7', function () {
    expect(calculator.add(12, -7)).toBe(5);
  });
});

describe('Calculator tests', function () {
  // const calculator = new calc();
  it('should return the subtraction of 2 and 3', function () {
    expect(calculator.subtract(2, 3)).toEqual(-1);
  });
  it('should return the subtraction of -15 and -15', function () {
    expect(calculator.subtract(-15, -15)).toBeFalsy();
  });
  it('should return the subtraction of 12 and -7', function () {
    expect(calculator.subtract(12, -7)).toBe(19);
  });
});

describe('Calculator tests', function () {
  // const calculator = new calc();
  it('should return the multiple of 2 and 3', function () {
    expect(calculator.multiply(2, 3)).toEqual(6);
  });
  it('should return the multiple of -15 and 15', function () {
    expect(calculator.multiply(0, 0) != 0).toBeFalsy();
  });
  it('should return the multiple of 12 and -7', function () {
    expect(calculator.multiply(12, 5)).toBe(60);
  });
});

describe('Calculator tests', function () {
  it('should return the quotient of 3 and 3', function () {
    expect(calculator.divide(3, 3)).toEqual(1);
  });
  it('should return the quotient of 0 and 0', function () {
    expect(calculator.divide(0, 0)).toBeFalsy();
  });
  it('should return the quotient of 12 and 7', function () {
    expect(calculator.divide(12, 7)).toBeTruthy();
  });
});

describe('capitalize', function () {
  it('should return the string with the first letter in uppercase', function () {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('should return false ', function () {
    expect(typeof capitalize('world') != 'string').toBeFalsy();
  });
  it('should throw an error "Please provide a string"', function () {
    expect(() => capitalize(100).toThrow('Please provide a string'));
  });
});
