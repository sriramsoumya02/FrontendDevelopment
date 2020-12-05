import React from 'react';
import axios from 'axios';
import Pokemon from './pokemon';
import {render,screen,wait,waitForElement,cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('axios');
describe('testing pokemon',()=>{
  afterEach(cleanup);
  test('should show the pokemon abilities of that pokemon',async()=>{
    const abilities = [
      {
        ability: {
          name: 'Test ability 1',
          url: 'https://ability.com/ability1',
        },
      },
      {
        ability: {
          name: 'Test ability 2',
          url: 'https://ability.com/ability2',
        },
      },
    ];
    axios.get.mockResolvedValueOnce({ data: { abilities } });
    render(<Pokemon/>);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });
  test('calls the onChange callback handler',async()=>{
    const handleNameChange = jest.fn();
    render(<Pokemon/>);
    const input = screen.getByRole("textbox");
    await userEvent.type(input,"soumya");
    expect(input.value).toBe("soumya");
    wait(() => expect(handleNameChange).toHaveBeenCalledTimes(1));
  });
  test('giving error when api calls fails',async()=>{
    axios.get.mockRejectedValueOnce(new Error());
    render(<Pokemon/>);
    const input = screen.getByRole("textbox");
    userEvent.type(input,"soumya");
    await wait(()=>expect(input.value).toBe("soumya"));
    await userEvent.click(screen.getByRole('button'));
    wait(() => expect(screen.findByText(/Something/)).toBeInTheDocument());
  });
});