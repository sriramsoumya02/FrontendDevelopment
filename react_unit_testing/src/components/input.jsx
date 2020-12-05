import React from 'react';
const Input = ({children,value,onChange}) => {
  return ( <div>
    <label htmlFor="search">{children}</label>
    <input placeholder="example" type="text" id="search" onChange={onChange} value={value}/>
  </div> );
}
 
export default Input;