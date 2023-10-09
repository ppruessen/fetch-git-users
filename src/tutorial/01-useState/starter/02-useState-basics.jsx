import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  const handleClick = () => {
    setCount(count + 1);
  }

  return <div>
    <h4>You clicked {count} times</h4>
    <button type="button" className="btn" onClick={handleClick}>Increase</button>
  </div>;
};

export default UseStateBasics;
