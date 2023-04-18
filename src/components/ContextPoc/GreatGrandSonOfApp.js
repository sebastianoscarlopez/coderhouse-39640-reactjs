import { useContext } from "react";
import { JarMoney } from "./JarMoney";
import { MoneyContext } from "./ContextPoc";

const GreatGrandSonOfApp = () => {
  const { money, addMoney }  = useContext(MoneyContext);

  return (
    <div>
      <h1>Great Grand Son of App</h1>
      <button onClick={addMoney}>Save Money $ 1</button>
      <JarMoney>{money}</JarMoney>
    </div>
  );
};

export default GreatGrandSonOfApp;
