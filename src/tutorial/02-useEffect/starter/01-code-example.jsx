import { useState } from 'react';

const CodeExample = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const sayHello = () => {
    console.log('Hello there');
  };
  sayHello();
  return (
    <div>
      <h1>value : {value1}</h1>
      <button className='btn' onClick={() => setValue1(value1 + 1)}>
        click me
      </button>
      <h1>value : {value2}</h1>
      <button className='btn' onClick={() => setValue2(value2 + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
