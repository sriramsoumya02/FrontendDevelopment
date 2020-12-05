import React,{useState} from 'react'
import axios from 'axios';
import Input from './input';
const pokemonurl='https://pokeapi.co/api/v2';
const Pokemon = () => {
  const [name,setName]=useState('');
  const [abilities,setAbilities]=useState([]);
  const[error,setError]=useState(null);
  const handleNameChange=(e)=>setName(e.target.value);
  const handleAbilities=async()=>{
    try{
    const result=await axios.get(`${pokemonurl}/pokemon/${name}`);
    setAbilities(result.data.abilities);
    setError(null);
    }catch(ex){
      setAbilities([]);
      setError(ex);
    }

  }
  return ( <React.Fragment>
   <Input value={name}  onChange={handleNameChange}>Pokemon Name :</Input>
   <button onClick={handleAbilities}>Get Abilities</button>
   {error && <span> Something went wrong ...</span>}
  <ul>
  {abilities.map( (ability,i) => (<li key={i}> <a href={ability.ability.url}>{ability.ability.name}</a></li>))}
   </ul>
   
   </React.Fragment> );
}
 
export default Pokemon;