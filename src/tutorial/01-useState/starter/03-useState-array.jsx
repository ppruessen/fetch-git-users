import { useState } from "react";
import {data} from "../../../data.js";

const UseStateArray = () => {
  const [persons, setPersons] = useState(data);

  const handleClickDeleteAll = () => {
    setPersons([]);
  }

  const handleClickRestoreAll = () => {
    setPersons(data);
  }

  const handleClick = (id) => {
    const result = persons.filter((person) => {
      return person.id !== id;
    })
    setPersons(result);

  }

  return (<>
    <h2>Members</h2>
    <div>
        {persons.map((person) => {
          const {id, name} = person;
          return (
            <div key={id}>
              <div>{name}</div>
              <button onClick={() => {handleClick(id)}}>Delete {name}</button>
            </div>
          );
        })}
    </div>
    <div>
      <button className="btn" onClick={handleClickDeleteAll}>Delete all</button>
    </div>
    <button className="btn" onClick={handleClickRestoreAll}>Restore all</button>
  </>);
};

export default UseStateArray;
