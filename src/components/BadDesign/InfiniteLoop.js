import { useEffect, useState } from "react";

const InfiniteLoop = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.random() * 1000);
  }, [randomNumber]);

  return (
    <div>
      <h1>This component should display a random number, but. . . .</h1>
      <p>It is broken because of an infinite loop, so it doesn't render</p>
      <p>Random number: {randomNumber}</p>
    </div>
  );
};

export default InfiniteLoop;
