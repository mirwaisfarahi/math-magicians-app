import calculate from '../logic/calculate';

describe('Test calculate.js', () => {
  it('Test Operation Function', () => {
    const testObj = {
      total: 0,
      next: 4,
      operation: '+',
    };
    const calculation = calculate(testObj, '+');
    expect(calculation.operation).toBe('+');
  });

  it('Test total', () => {
    const testObj = {
      total: 20,
      next: 4,
      operation: '+',
    };
    const calculation = calculate(testObj, '=');
    expect(calculation.total).toBe('24');
  });

  it('Test total', () => {
    const testObj = {
      total: 20,
      next: 40,
      operation: '-',
    };
    const calculation = calculate(testObj, '=');
    expect(calculation.total).toBe('-20');
  });
});
