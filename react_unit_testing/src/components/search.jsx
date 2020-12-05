import React from 'react';
import {useState,useEffect} from 'react';
import Input from './input';
import {getUser} from './api';

const Search = () => {
  const [text,setText]=useState('');
  const[user,setUser]=useState(null);
  useEffect(() => {
    const fetchUser= async () =>{
      const user= await getUser();
      setUser(user);
    }
    fetchUser();
  }, [])
  const handleOnchangeText=(e)=> setText(e.target.value);
  return (
    <React.Fragment>
      {user?<p>{user.name}</p>:null}
     <Input value={text}  onChange={handleOnchangeText}>Input</Input>
      <p>You typed : {text? text : '...'}</p>
     </React.Fragment>
    );
}
 
export default Search;