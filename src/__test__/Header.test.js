import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('test Header function', () => {
  it('Match Header DOM', () => {
    const headerTree = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(headerTree).toMatchSnapshot();
  });
});
