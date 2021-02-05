import React from 'react';
import { useParams } from 'react-router-dom';

const Personas = () => {
  const {name} = useParams();
  //console.log(id)
  const baseUrl = `https://digimon-api.vercel.app/api/digimon/name/${name}`
  /* https://digimon-api.herokuapp.com/api/digimon/name/agumon */
  const [personaje,  setPersonaje] = React.useState([]);

  React.useEffect(()=>{
    fetchDatos()
  },[])

  const fetchDatos = async () => {
   const data = await fetch(baseUrl)
   const res = await data.json()
   console.log(res)
    setPersonaje(res)
  } 

  return (
    <div>
      {personaje.map(e=>(
      <div key={e.name}>
        <h1>{e.name}</h1>
        <h4>Nivel de poder: {e.level}</h4>
        <img src={e.img} alt=""/>
        </div>)
        )}
    </div>
  )
}

export default Personas
