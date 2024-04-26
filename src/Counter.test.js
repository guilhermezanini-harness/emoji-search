// Counter.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

it('increments count by 1 when the button is clicked', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Counter />, root);

  const button = root.querySelector('button');
  const p = root.querySelector('p');
  
  expect(p.textContent).toBe('You clicked 0 times');

  button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(p.textContent).toBe('You clicked 1 times');
});
