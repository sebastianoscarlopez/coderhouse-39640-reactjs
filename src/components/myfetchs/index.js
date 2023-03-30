import { useEffect, useState } from 'react';

const MyFetch = () => {
  const [data, setData] = useState([]);

  const responseToText = response => response.text();
  const responseToJSON = response => response.json();

  const updateData = (realResponse) => {
    console.log(realResponse)
    setData(realResponse)
  }

  useEffect(() => {
    fetch('http://localhost:3000/pikachu.json')
      .then(responseToJSON)
      .then(updateData)
  }, [])

  const displayAbility = (ability) => {
    console.log(ability)
    return (
      <div key={ability.ability.name}>
        <h3>{ability.ability.name}</h3>
        <p>{ability.slot}</p>
      </div>
    )
  }

  return (
    <div>{
      data.abilities?.length > 0
        ? data.abilities.map(displayAbility)
        : 'loading. . .'
    }</div>
  )
}

export default MyFetch