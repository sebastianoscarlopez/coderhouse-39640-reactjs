import { useEffect, useState } from 'react';

const RenderingPoc = () => {

  const [nivelFelicidad, setNivelFelicidad] = useState(4);

  const onNivelFelicidadHandler = (evt) => {
    setNivelFelicidad(evt.target.value);
  }

  useEffect(() => {
    console.log('nivelFelicidad: ', nivelFelicidad)
  }, [nivelFelicidad])

  return (
    <>
      <h1>Nivel felicidad</h1>
      <input
        type="range"
        value={nivelFelicidad}
        onChange={onNivelFelicidadHandler}
        min={1}
        max={10}
      />
      {nivelFelicidad < 4 && <h1>😢</h1>}
      {(nivelFelicidad >= 4 && nivelFelicidad <= 7) && <h1>🙂</h1>}
      {nivelFelicidad > 7 && <h1>😃</h1>}
    </>
  )
}
// 😐 4 y 7 inclusives
// 😃 > 7
export default RenderingPoc;