import React from 'react';
import TodoWithService from './todoWithService';
import { api } from './api';
import { fireEvent, render, wait } from '@testing-library/react';

const mockCreateIten = (api.createItem = jest.fn());
test('allows userd to add Todo', async () => {
  const todoText = 'todo 1';
  mockCreateIten.mockResolvedValueOnce({ id: 123, text: todoText });
  const { getByText, getByLabelText } = render(<TodoWithService />);
  const input = getByLabelText('What needs to be done?');
  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(getByText('Add #1'));
  expect(mockCreateIten).toHaveBeenCalledTimes(1);
  expect(mockCreateIten).toHaveBeenCalledWith(
    '/items',
    expect.objectContaining({ text: todoText })
  );
  await wait(() => getByText(todoText));
  getByText('Add #2');
});
