import React from 'react';
import { render, screen } from '@testing-library/react';
import Foo from './Foo.js';

test('render h1 element', () => {
  render(<Foo />);
  expect(screen.getByText('Hello World 3')).toBeInTheDocument();
});