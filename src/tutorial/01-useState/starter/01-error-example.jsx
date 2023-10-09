const ErrorExample = () => {
  let counter = 0;

  const counting = () => {
    counter++;
    console.log(counter);
  }

  return <>
    <h2>{counter}</h2>
    <button type="button" onClick={counting} className="btn">Increase</button>
  </>;
};

export default ErrorExample;
