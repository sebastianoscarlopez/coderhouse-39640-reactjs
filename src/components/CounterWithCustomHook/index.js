import useCount from "./useCount";

const Counter = () => {

  const {
    counter,
    increment,
    decrement,
    reset
  } = useCount();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;