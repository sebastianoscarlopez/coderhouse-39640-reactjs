import GreatGrandSonOfApp from './GreatGrandSonOfApp'
import { JarMoney } from './JarMoney'

const GrandSonOfApp = ({ money }) => {
  return (
    <div>
      <h1>Grand Son of App</h1>
      <JarMoney>
        {money}
      </JarMoney>
      <GreatGrandSonOfApp />
    </div>
  )
}

export default GrandSonOfApp
