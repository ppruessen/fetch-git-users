import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Reading Books'
  })

  const displayPerson = () => {
    // setPerson({name: 'John', age: 32, hobby: 'Scream at the Computer'})
    setPerson({ ...person, name: 'Jimmy' })
  }
  const {name, age, hobby} = person;
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h4>Enjoys: {hobby}</h4>
    <button className='btn' onClick={displayPerson}>Show John</button>
  
  </>;
};

export default UseStateObject;
