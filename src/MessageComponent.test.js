// MessageComponent.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import MessageComponent from './MessageComponent';

it('displays an incorrect message, causing the test to fail', () => {
  const root = document.createElement('div');
  ReactDOM.render(<MessageComponent message="Hello, world!" />, root);

  // This assertion is intended to fail because it checks for a wrong message
  expect(root.querySelector('h1').textContent).toBe('Goodbye, world!');
});