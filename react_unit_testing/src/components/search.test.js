import Search from './search';
import React from 'react';
import {render,screen,wait,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import *  as api from './api';

 describe('testing serach component', () => {
   beforeEach(async()=>{
    api.getUser=jest.fn(()=>({name:'soumya',id:'1'}));
    render(<Search/>);
    await(wait(()=> expect(api.getUser).toHaveBeenCalled()));
   });
   test('search component should render properly',()=>{
    screen.debug();
   });
   test('should select the children that is being passed to the component',()=>{
     
      screen.getByText('Input');
      screen.getByText(/Input/);
      let err;
      try{
        screen.getByText('Input ; :')
      }catch(ex){
        err=ex;
      }
      expect(err).toBeDefined();
   });
   test('should select the input element by its role', () => {
     screen.getByRole('textbox');
   });
   test('should render input element by label text', () => {
     screen.getByLabelText('Input');
   });
    test('should render input element by placeholder text', () => {
      screen.getByPlaceholderText('example');
    });
    test('should return null for queryby role "whatever" is not there in our component', () => {
      expect(screen.queryByRole('whatever')).toBeNull();
      expect(screen.queryByRole('textbox')).not.toBeNull();
    })
    
 });
 describe('when the component fetches the user succesfully',()=>{
test('should call get user only once',async()=>{
  api.getUser.mockClear();
  render(<Search/>);
  await(wait(()=> expect(api.getUser).toHaveBeenCalledTimes(1)));
  });
  test('should render the username', async() => {
    let username='soumya';
    api.getUser=jest.fn(()=>(Promise.resolve({name:'other',id:'1'})))
    .mockImplementationOnce(()=>(Promise.resolve({name:username,id:'1'})));
    render(<Search/>);
    expect(screen.queryByRole('p')).toBeNull();
    //expect(await screen.queryByRole('p')).toBeInTheDocument();
    expect(await screen.findByText(`${username}`)).toBeInTheDocument();
  })
  
 });
 describe('When the user enters some text in the input element', () => {
  test('should display the text in the screen', async () => {
    api.getUser=jest.fn(()=>({name:'soumya',id:'1'}));
    render(<Search/>);
    await(wait(()=> expect(api.getUser).toHaveBeenCalled()));
    expect(screen.getByText('You typed : ...')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'),{target:{value:'testing'}});
    expect(screen.getByText(/You typed : testing/)).toBeInTheDocument();
  });
});
describe('When the user enters some text in the input element with userEvent', () => {
  test('should display the text in the screen  with userEvent', async () => {
    api.getUser=jest.fn(()=>({name:'soumya',id:'1'}));
    render(<Search/>);
    await(wait(()=> expect(api.getUser).toHaveBeenCalled()));
    expect(screen.getByText('You typed : ...')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'),'testing');
    expect(screen.getByText(/You typed : testing/)).toBeInTheDocument();
  });
});
 