import React from 'react';
import {Link} from 'react-router-dom';

const Contacts = () => {
  const baseUrl = 'https://digimon-api.vercel.app/api/digimon'
  const [digimon, setDigimon] = React.useState([])

  React.useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch(baseUrl)
    const result = await data.json()
    console.log(result)
    setDigimon(result)
  }

  return (
    <div>
      <h1>Pág Contacts</h1>
      <hr/>
      <ul>
        {
          digimon.map((items) => (
          <li key={items.name}> 
              <Link to={`/digimons/${items.name}`}>
                nombre: {items.name} 
              </Link>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Contacts
