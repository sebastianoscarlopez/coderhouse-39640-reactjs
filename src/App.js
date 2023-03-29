import { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item/item";

function App() {
  const [selected, setSelected] = useState(false);
  const [pasaronTresSegundos, setPasaronTresSegundos] = useState(false);


  useEffect(() => {
    if (selected) {
      console.log('Despues de 3 segundos');
    }

  }, [pasaronTresSegundos, selected])

  useEffect(() => {
    if (selected) {
      console.log("Esta seleccionado");

      setTimeout(() => {
        setPasaronTresSegundos(true);
      }, 3000);

    } else {
      console.log("No esta seleccionado");
      setPasaronTresSegundos(false);
    }
  }, [selected])


  /// EXCEPCIONES DE DEPENDENCIAS EN useEffect
  /*
  useEffect(() => {
    console.log(selected, );
  })

  // Si el array es vacio entonces solo ejecutar cuando inicia
  useEffect(() => {
   console.log("Traer items");
  }, [])
*/
  ////////////////////


  return (
    <div className="App">
      <Item isSelected={selected} onSelectedChange={setSelected}>
        <>
          <p className="title">
            <b>T-shirt</b>
          </p>

          <p>description</p>

          <div>
            <button>Add</button>
          </div>
        </>
      </Item>
    </div>
  );
}

export default App;
