import { useState } from 'react'
import GrandSonOfApp from './GrandSonOfApp'
import { MoneyProvider } from './ContextPoc';

const SonOfApp = () => {
  return (
    <MoneyProvider>
      <div>
        <h1>Son of App</h1>
        <GrandSonOfApp />
      </div>
    </MoneyProvider>
  )
}

export default SonOfApp
