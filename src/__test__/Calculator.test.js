import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('test calculator function', () => {
  it('Match Calculator DOM', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
