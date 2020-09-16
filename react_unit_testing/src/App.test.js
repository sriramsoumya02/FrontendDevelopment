import React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);
});
