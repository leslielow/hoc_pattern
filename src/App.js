import { useEffect, useState } from 'react';
import './App.css';
import Card, { WithCard } from './components/Card';
import Input from './components/Input';
import getPersonajesApi from './services/getPersonajesApi';

function App() {

  const [value, setValue] = useState("");
  const [characters, setCharacters] = useState([]);

   /* ESTA OPCION ME RENDERIZABA CADA VEZ QUE ESCRIBIA O BORRABA UN NUMERO - 
   POR ESO AGREGUE UN BUTTON PARA EL MANEJO DEL RENDERIZADO */
  // useEffect(() => {
  //   if (value > 0) {
  //     getPersonajesApi(value).then(value => {
  //       setCharacters([...characters, value])
  //     });
  //   }
  // }, [value]);  

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const busqueda = () => {
    if (value > 0) {
      getPersonajesApi(value).then(value => {
        setCharacters([...characters, value])
        setValue("")
      });
    }
  }

  return (
    <div>
      <Input value={value} onChangeInput={onChangeInput} />
      <button onClick={() => busqueda()}>Buscar</button>
      {/* <Card characters = {characters}/>  LA CARD ANTES DE PASAR POR EL HOC*/} 
      <WithCard characters = {characters}/>

    </div>
  );
}

export default App;
