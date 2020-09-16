import React from 'react';
//import ReactDOM from 'react-dom';
import Todo from './todo';
import { fireEvent, render } from '@testing-library/react';
//import { getQueriesForElement } from '@testing-library/dom';
// const render = (Component) => {
//   const app = document.createElement('div');
//   ReactDOM.render(Component, app);
//   return getQueriesForElement(app);
// };

test('renders the correct content', () => {
  const { getByText, getByLabelText } = render(<Todo />);
  // expect(app.querySelector('h1').textContent).toBe('Todos');
  // expect(app.querySelector('label').textContent).toBe('What needs to be done?');
  // expect(app.querySelector('button').textContent).toBe('Add #1');
  expect(getByText('Todos')).not.toBeNull();
  expect(getByLabelText('What needs to be done?')).not.toBeNull();
  expect(getByText('Add #1')).not.toBeNull();
});

test('allows userd to add Todo', () => {
  const { getByText, getByLabelText } = render(<Todo />);
  const input = getByLabelText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'my todo 1' } });
  fireEvent.click(getByText('Add #1'));
  getByText('my todo 1');
  getByText('Add #2');
});
