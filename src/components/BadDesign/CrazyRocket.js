import { useEffect, useState } from "react";
import './CrazyRocket.css';

const CrazyRocket = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setInterval(() => {
        if(count > 0) {
          setCount(count - 1);
        }
    }, 500);
  }, [count]);

  return (
    <div>
      <h1>This Rocket is crazy</h1>
      <p></p>
      <p>Remaining to rocket launch: {count}</p>
      <div className="rocket-plattform">
        <span className={`rocket-launch ${count === 0 ? 'rocket-launch-blastoff' : ''}`}>🚀</span>
      </div>
    </div>
  );
};

export default CrazyRocket;
