import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyFetch = () => {
  const [data, setData] = useState([]);

  const responseToText = (response) => response.text();
  const responseToJSON = (response) => response.json();

  const updateData = (realResponse) => {
    console.log(realResponse);
    setData(realResponse);
  };

  const { name = "ditto" } = useParams();

  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
  useEffect(() => {
    fetch(urlPokemon).then(responseToJSON).then(updateData);
  }, []);

  const displayAbility = (ability) => {
    console.log(ability);
    return (
      <div key={ability.ability.name}>
        <h3>{ability.ability.name}</h3>
        <p>{ability.slot}</p>
      </div>
    );
  };

  return (
    <>
      <h1>{name}</h1>
      <div>
        <h2>Abilities</h2>
        <div>
          {data.abilities?.length > 0
            ? data.abilities.map(displayAbility)
            : "loading. . ."}
        </div>
      </div>
    </>
  );
};

export default MyFetch;
