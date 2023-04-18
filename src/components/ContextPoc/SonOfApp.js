import { useState } from 'react'
import GrandSonOfApp from './GrandSonOfApp'

const SonOfApp = () => {
  const [money, setMoney] = useState(0)

  const onClickHandler = () => {
    setMoney(money + 1)
  }

  return (
    <div>
      <h1>Son of App</h1>
      <button onClick={onClickHandler}>Save Money $ 1</button>
      <GrandSonOfApp money={money} />
    </div>
  )
}

export default SonOfApp
