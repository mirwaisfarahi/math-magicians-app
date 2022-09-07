import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('test Quote function', () => {
  it('Match Quote DOM', () => {
    const quoteTree = render(<Quote />);
    expect(quoteTree).toMatchSnapshot();
  });
});
