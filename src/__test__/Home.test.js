import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('test calculator function', () => {
  it('Match Home DOM', () => {
    const homeTree = render(<Home />);
    expect(homeTree).toMatchSnapshot();
  });
});
