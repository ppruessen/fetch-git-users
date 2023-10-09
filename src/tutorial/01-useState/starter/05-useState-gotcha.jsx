import { useState } from "react";

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    // setCounter(counter + 1);
    // console.log(counter);
    // setCounter((currentState) => {
    //   const newState = currentState + 1;
    //   console.log(newState);
    //   return newState
    // })

    setTimeout(() => {
      setCounter((currentState) => (currentState + 1) );
    }, 3000)
  }

  return <>
    <h2>{counter}</h2>
    <button className="btn" onClick={addOne}>Increase by 1</button>
  </>;
};

export default UseStateGotcha;
