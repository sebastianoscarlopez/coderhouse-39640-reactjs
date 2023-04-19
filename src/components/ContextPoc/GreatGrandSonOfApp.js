import { useContext } from "react";
import { JarMoney } from "./JarMoney";
import { MoneyContext } from "./ContextPoc";

const GreatGrandSonOfApp = () => {
  const { money } = useContext(MoneyContext);

  return (
    <div>
      <h1>Great Grand Son of App</h1>
      <JarMoney>{money}</JarMoney>
    </div>
  );
};

export default GreatGrandSonOfApp;
