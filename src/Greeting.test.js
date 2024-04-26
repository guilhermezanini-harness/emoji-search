import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

it('renders the correct greeting', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Greeting name="World" />, root);
  
  expect(root.querySelector('h1').textContent).toBe('Hello, World!');
});