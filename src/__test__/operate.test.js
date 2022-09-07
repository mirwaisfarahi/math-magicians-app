import operate from '../logic/operate';

describe('arithmatic operations', () => {
  test('add two numbers', () => {
    const sum = operate(20, 5, '+');
    expect(sum).toBe('25');
  });

  test('subtract two numbers', () => {
    const result = operate(7, 15, '-');
    expect(result).toBe('-8');
  });

  test('multiplies two numbers', () => {
    const product = operate(3, 5, 'x');
    expect(product).toBe('15');
  });

  test('divides two numbers', () => {
    const quotient = operate(1, 2, '÷');
    expect(quotient).toBe('0.5');
  });

  test('divides two numbers', () => {
    const quotient = operate(30, 10, '÷');
    expect(quotient).toBe('3');
  });
});
