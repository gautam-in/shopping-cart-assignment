import Validator from '../helpers/validations';

describe('Validation tests', () => {
  let validator;

  beforeAll(() => {
    validator = new Validator();
  });

  test('should invalidate incorrect email id', () => {
    const result = validator.validateEmail('aa');
    expect(result).toBeFalsy();
  });

  test('should validate correct email id', () => {
    const result = validator.validateEmail('aa@gmail.com');
    expect(result).toBeTruthy();
  });

  test('should invalidate password having less than 6 characters', () => {
    const result = validator.validatePassword('aa');
    expect(result).toBeFalsy();
  });

  test('should invalidate password having space', () => {
    const result = validator.validatePassword('aaa 123');
    expect(result).toBeFalsy();
  });

  test('should validate correct password', () => {
    const result = validator.validatePassword('aaa123');
    expect(result).toBeTruthy();
  });
});
