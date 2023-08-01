import React, { useEffect, useState } from 'react';
import { getStarshipById } from './services/sw-api';

export default function App() {
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    // Fetch the starship with ID 3 when the component mounts
    getStarshipById(3)
      .then((data) => setStarship(data))
      .catch((error) => console.error('Error fetching starship:', error));
  }, []);

  return (
    <div className='container'>
      <h1> star-war Starship</h1>
      {starship ? (
        <div className="card">
          <p >Name: {starship.name}</p>
          <p>Model: {starship.model}</p>
          <p>manufacturer:{starship.manufacturer}
          </p>
          <p>cost_in_credits:{starship.cost_in_credits}</p>
         
          <p>length:{starship.length}</p>
          <p>crew:{starship.crew}</p>
          <p>max_atmosphering_speed:{starship.max_atmosphering_speed}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

