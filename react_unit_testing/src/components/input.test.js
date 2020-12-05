import Input from './input';
import React from 'react';
import {render, screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('tests for input component', () => {
  test('should render input component properly with Fireevent', () => {
   //const handleOnchangeText= (e)=>console.log(e.target.value);
   const handleOnchangeText = jest.fn();
    render(<Input value={"abcd"}  onChange={handleOnchangeText}>Input</Input>);
    fireEvent.change(screen.getByRole('textbox'),{target:{value:"soumya"}});
    expect(handleOnchangeText).toHaveBeenCalledTimes(1);
    //screen.debug();
  });
  test('should render input component properly with UserEvent', () => {
    const handleOnchangeText = jest.fn();
     render(<Input value={"abcd"}  onChange={handleOnchangeText}>Input</Input>);
     userEvent.type(screen.getByRole('textbox'),"soumya");
     expect(handleOnchangeText).toHaveBeenCalledTimes(6);
     //screen.debug();
   })
  
})
